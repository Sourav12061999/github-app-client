import React, { useState,useEffect } from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { TableRow } from "../Table/table.types";
import { LinkIcon } from "@chakra-ui/icons";
import useAddTeam from "../../Hooks/useAddTeam";
import { Spinner } from "@chakra-ui/react";
import UpdateModal from "../Update Modal/UpdateModal";
interface Props {
  tableRow: TableRow;
  cohort: number;
}
function Tablerow({ tableRow, cohort }: Props) {
  const { status, isLoading } = useAddTeam(
    tableRow.status,
    tableRow.github_username,
    cohort,
    tableRow
  );
  const [tableRowState, setTableRowState] = useState(tableRow);
  useEffect(() => {
    if(tableRowState.status==="WRONG USERNAME"){
      fetch(`https://api.github.com/users/${tableRowState.github_username}`)
      .then((res) => res.json())
      .then((res) =>{
        setTableRowState({...tableRowState,status:"CORRECT USERNAME"})
    })
    }
  }, [tableRowState])
  
  return (
    <>
      <Tr>
        <Td>{tableRowState.name}</Td>
        <Td>{tableRowState.student_code}</Td>
        <Td>{tableRowState.github_username}</Td>
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
          <UpdateModal setState={setTableRowState} data={tableRowState} />
        </Td>
      </Tr>
    </>
  );
}

export default Tablerow;
