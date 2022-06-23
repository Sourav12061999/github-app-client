import React, { useState, useEffect } from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { TableRow } from "../Table/table.types";
import { LinkIcon } from "@chakra-ui/icons";
import useAddTeam from "../../Hooks/useAddTeam";
import { Spinner,Checkbox } from "@chakra-ui/react";
import UpdateModal from "../Update Modal/UpdateModal";
interface Props {
  tableRow: TableRow;
  cohort: number;
  allChecked:boolean,
  setTableData:Function
}
function Tablerow({ tableRow, cohort,allChecked,setTableData }: Props) {
  const { status, isLoading, addToTeam } = useAddTeam(
    tableRow.status,
    tableRow.github_username,
    cohort,
    tableRow
  );
  const [tableRowState, setTableRowState] = useState(tableRow);
  const [checked, setChecked] = useState(allChecked);
  useEffect(() => {
    if (tableRowState.status === "WRONG USERNAME") {
      fetch(`https://api.github.com/users/${tableRowState.github_username}`)
        .then((res) => res.json())
        .then((res) => {
          setTableRowState({ ...tableRowState, status: "CORRECT USERNAME" });
        });
    }
  }, [tableRowState]);
  useEffect(() => {
    setChecked(allChecked)
  }, [allChecked])
  useEffect(() => {
    setTableData((prev:Array<TableRow>) =>{
      const newState=prev.map((element) =>{
        if(element._id === tableRow._id){
          return {...tableRow,isSelected:checked}
        }else{
          return element;
        }
      })
      return newState;
    })
  }, [checked])
  useEffect(() => {
    setTableData((prev:Array<TableRow>) =>{
     const newState=prev.map((el) =>{
      if(el._id===tableRowState._id){
        return tableRowState
      }else{
        return el;
      }
     })
     return newState;
    })
  }, [tableRowState])
  
  useEffect(() => {
    setTableData((prev:Array<TableRow>) =>{
      const newState=prev.map((el) =>{
       if(el.status===status){
         return {...el,status}
       }else{
         return el;
       }
      })
      return newState;
     })
  }, [status])
  
  return (
    <>
      <Tr>
        <Td><Checkbox isChecked={checked} onChange={(e) =>{
          setChecked(e.target.checked);
        }}>Select</Checkbox></Td>
        <Td>{tableRowState.name}</Td>
        <Td>{tableRowState.student_code}</Td>
        <Td>{tableRowState.github_username}</Td>
        <Td>{tableRowState.name + "_"+tableRowState.student_code}</Td>
        <Td>
          <a
            target={"_blank"}
            href={`https://github.com/${tableRowState.github_username}`}
          >
            <Button
              rightIcon={<LinkIcon />}
              colorScheme="blue"
              variant="outline"
            >
              Profile
            </Button>
          </a>
        </Td>
        <Td>
          {!isLoading ? (
            status
          ) : (
            <>
              <Spinner size="md" />
            </>
          )}
        </Td>
        <Td>
          <UpdateModal
            addToTeam={addToTeam}
            setState={setTableRowState}
            data={tableRowState}
          />
        </Td>
      </Tr>
    </>
  );
}

export default Tablerow;
