import React, { useState } from "react";
import { TableRow } from "../Components/Table/table.types";
import url from "../backend.url";
import useAddTeam from "./useAddTeam";
function useUpdateData() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  async function updateData(newData: TableRow) {
    try {
      setIsLoading(true);
      let res = await fetch(`${url}/api/students`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      let data = res.json();
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }
  return { isLoading, isSuccess, updateData };
}

export default useUpdateData;
