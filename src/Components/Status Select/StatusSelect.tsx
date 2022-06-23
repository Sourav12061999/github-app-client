import React from "react";
import { Select } from "@chakra-ui/react";
interface Props {
  setStatus: (cohort: string) => void;
}
function CohortSelect({ setStatus }: Props) {
  return (
    <div style={{marginTop:"20px"}}>
    <Select
      onChange={(e) => {
        setStatus(e.target.value);
      }}
    >
      <option value={"all"}>{"All Status"}</option>
      <option value={"PENDING"}>{"PENDING"}</option>
      <option value={"ACTIVE"}>{"ACTIVE"}</option>
      <option value={"DONE"}>{"DONE"}</option>
      <option value={"WRONG USERNAME"}>{"WRONG USERNAME"}</option>
      <option value={"CORRECT USERNAME"}>{"CORRECT USERNAME"}</option>
    </Select>
    </div>
  );
}

export default CohortSelect;
