import React, { useState, useEffect } from "react";
import useUpdateData from "./useUpdateData";
import { TableRow } from "../Components/Table/table.types";
function useAddTeam(
  prevStatus: string,
  username: string,
  cohort: number,
  tableRow: TableRow
) {
  const [status, setStatus] = useState(prevStatus);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoading: isLoadingUpdate, isSuccess, updateData } = useUpdateData();
  useEffect(() => {
    if (prevStatus === "CORRECT USERNAME" || prevStatus === "PENDING") {
      setIsLoading(true);
      addToTeam(
        username,
        cohort,
        setStatus,
        setIsLoading,
        updateData,
        tableRow
      );
    }
  }, []);
  return { status, setStatus, addToTeam, isLoading };
}
export default useAddTeam;

function addToTeam(
  username: string,
  cohort: number,
  setStatus: Function,
  setIsLoading: Function,
  updateData: Function,
  tableRow: TableRow
) {
  let res = fetch(
    `https://api.github.com/orgs/masai-course/teams/Cohort-${cohort}/memberships/${username}`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer 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",
      },
    }
  );
  res
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setStatus(data.state.toUpperCase());
      setIsLoading(false);
      updateData({ ...tableRow, status: data.state.toUpperCase() });
    })
    .catch((error) => {
      console.log(error);
      setStatus("ERROR-ADDTOTEAM");
      setIsLoading(false);
    });
}
