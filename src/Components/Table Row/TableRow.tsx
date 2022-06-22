import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { TableRow } from "../Table/table.types";
import { LinkIcon } from "@chakra-ui/icons";
import useAddTeam from "../../Hooks/useAddTeam";
import { Spinner } from "@chakra-ui/react";
interface Props {
  tableRow: TableRow;
  cohort: number;
}
function Tablerow({ tableRow, cohort }: Props) {
  const { status, setStatus, addToTeam, isLoading } = useAddTeam(
    tableRow.status,
    tableRow.github_username,
    cohort
  );
  return (
    <Tr>
      <Td>{tableRow.name}</Td>
      <Td>{tableRow.student_code}</Td>
      <Td>{tableRow.github_username}</Td>
      <Td>
        <a
          target={"_blank"}
          href={`https://github.com/${tableRow.github_username}`}
        >
          <Button rightIcon={<LinkIcon />} colorScheme="blue" variant="outline">
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
    </Tr>
  );
}

export default Tablerow;
