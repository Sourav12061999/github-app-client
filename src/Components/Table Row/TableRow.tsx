import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import {TableRow} from "../Table/table.types";
interface Props{
    tableRow:TableRow
}
function Tablerow({tableRow}:Props) {
  return (
    <Tr>
      <Td>{tableRow.name}</Td>
      <Td>{tableRow.student_code}</Td>
      <Td>{tableRow.github_username}</Td>
      <Td>{tableRow.profile}</Td>
      <Td>{tableRow.status}</Td>
    </Tr>
  );
}

export default Tablerow;
