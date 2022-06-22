import React, { useState, useEffect } from "react";

function useAddTeam(prevStatus: string, username: string, cohort: number) {
  const [status, setStatus] = useState(prevStatus);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (prevStatus === "Correct Username") {
        setIsLoading(true);
      addToTeam(username, cohort, setStatus,setIsLoading);
    }
  }, []);
  return { status, setStatus, addToTeam,isLoading };
}
export default useAddTeam;

function addToTeam(username: string, cohort: number, setStatus: Function,setIsLoading:Function) {
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
      setStatus("Pending");
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setStatus("Error-AddToTeam");
      setIsLoading(false);
    });
}
