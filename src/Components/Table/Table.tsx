import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import {TableRow} from "./table.types";
import Tablerow from "../Table Row/TableRow";
interface Props{
    tableRows:Array<TableRow>,
}
function TableComponent({tableRows}:Props) {
  return (
    <TableContainer style={{marginTop:"30px"}}>
      <Table size="sm">
        <Thead>
          <Tr >
            <Th style={{fontSize:"30px"}}>Name</Th>
            <Th style={{fontSize:"30px"}}>Student Code</Th>
            <Th style={{fontSize:"30px"}}>Github Username</Th>
            <Th style={{fontSize:"30px"}}>Profile</Th>
            <Th style={{fontSize:"30px"}}>Status</Th>
            <Th style={{fontSize:"30px"}}>Update</Th>
          </Tr>
        </Thead>
        <Tbody>
         {
            tableRows.map((el) =>(
                <React.Fragment key={el._id}>
                    <Tablerow tableRow={el}/>
                </React.Fragment>
            ))
         }
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
