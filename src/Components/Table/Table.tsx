import React, { useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Checkbox,
} from "@chakra-ui/react";
import { TableRow } from "./table.types";
import Tablerow from "../Table Row/TableRow";
import MenuComp from "../Menu Component/MenuComp";
interface Props {
  tableRows: Array<TableRow>,
  cohort: number;
  setTableData:Function,
  isActivePage?:true,
  fetchStudentsData:Function
}
function TableComponent({ tableRows, cohort,setTableData,isActivePage,fetchStudentsData }: Props) {
  const [allChecked, setAllChecked] = useState(false);
  return (
    <TableContainer style={{ marginTop: "20px" }}>
      <MenuComp fetchStudentsData={fetchStudentsData}  isActivePage={isActivePage} tableRows={tableRows}/>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>
              <Checkbox
                checked={allChecked}
                onChange={(e) => {
                  setAllChecked(e.target.checked);
                }}
              >
                Select All
              </Checkbox>
            </Th>
            <Th style={{ fontSize: "20px" }}>Name</Th>
            <Th style={{ fontSize: "20px" }}>Student Code</Th>
            <Th style={{ fontSize: "20px" }}>Github Username</Th>
            <Th style={{ fontSize: "20px" }}>Repo Name</Th>
            <Th style={{ fontSize: "20px" }}>Profile</Th>
            <Th style={{ fontSize: "20px" }}>Status</Th>
            <Th style={{ fontSize: "20px" }}>
              Update
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableRows.map((el) => (
            <React.Fragment key={el._id}>
              <Tablerow setTableData={setTableData} allChecked={allChecked} cohort={cohort} tableRow={el} />
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
