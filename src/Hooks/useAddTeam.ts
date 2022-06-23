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
  function addToTeam(
    username: string,
    cohort: number,
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
        updateData({ ...tableRow, status: data?.state.toUpperCase() });
      })
      .catch((error) => {
        console.log(error);
        setStatus("ERROR-ADDTOTEAM");
        setIsLoading(false);
      });
  }
  useEffect(() => {
    if (prevStatus === "CORRECT USERNAME" || prevStatus === "PENDING" || prevStatus === "ERROR-ADDTOTEAM") {
      setIsLoading(true);
      addToTeam(
        username,
        cohort,
        tableRow
      );
    }
  }, []);
  return { status, setStatus, addToTeam, isLoading };
}
export default useAddTeam;


