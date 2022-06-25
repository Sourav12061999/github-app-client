import React, { useEffect, useState } from "react";
import TableComponent from "../../Components/Table/Table";
import CohortSelect from "../../Components/Cohort Select/CohortSelect";
import url from "../../backend.url";
import { TableRow } from "../../Components/Table/table.types";
function Done() {
  const [cohortList, setCohortList] = useState([]);
  const [currentCohort, setCurrentCohort] = useState<number | null>(null);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch(`${url}/api/Cohorts`)
      .then((res) => res.json())
      .then((res) => {
        setCohortList(res);
        if (res.length > 0) {
          setCurrentCohort(res[0].cohort);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const fetchStudentsData=() =>{
    fetch(`${url}/api/students/${currentCohort}/DONE`)
    .then((res) => res.json())
    .then((res) => {
      res=res.map((el:TableRow) =>({
        ...el,
        isSelected:false,
      }) )
      setTableData(res);
    })
    .catch((error) => {
      console.log(error);
    });
  }// This Function for fetching the students data
  useEffect(() => {
    if (currentCohort === null) {
      return;
    }
    fetchStudentsData()
    
  }, [currentCohort]);

  return (
    <div style={{ width: "80%", marginInline: "auto", marginTop: "30px" }}>
      <CohortSelect setCohort={setCurrentCohort} cohorts={cohortList} />
      <TableComponent fetchStudentsData={fetchStudentsData} cohort={currentCohort || 0} tableRows={tableData} setTableData={setTableData} />
    </div>
  );
}

export default Done;
