import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { TableRow } from "../Table/table.types";
import { LinkIcon } from "@chakra-ui/icons";
interface Props {
  tableRow: TableRow;
}
function Tablerow({ tableRow }: Props) {
  return (
    <Tr>
      <Td>{tableRow.name}</Td>
      <Td>{tableRow.student_code}</Td>
      <Td>{tableRow.github_username}</Td>
      <Td>
        <a target={"_blank"} href={`https://github.com/${tableRow.github_username}`}>
        <Button rightIcon={<LinkIcon />} colorScheme="blue" variant="outline">
          Profile
        </Button>
        </a>
      </Td>
      <Td>{tableRow.status}</Td>
    </Tr>
  );
}

export default Tablerow;
