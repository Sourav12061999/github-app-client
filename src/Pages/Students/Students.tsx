import React, { useEffect, useState } from "react";
import TableComponent from "../../Components/Table/Table";
import CohortSelect from "../../Components/Cohort Select/CohortSelect";
import url from "../../backend.url";
import StatusSelect from "../../Components/Status Select/StatusSelect";
import { TableRow } from "../../Components/Table/table.types";
function Students() {
  const [cohortList, setCohortList] = useState([]);
  const [currentCohort, setCurrentCohort] = useState<number | null>(null);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState("all");
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
    fetch(`${url}/api/students/${currentCohort}/${status}`)
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
    
  }, [currentCohort,status]);
  

  return (
    <div style={{ width: "80%", marginInline: "auto", marginTop: "30px" }}>
      <CohortSelect setCohort={setCurrentCohort} cohorts={cohortList} />
      <StatusSelect setStatus={setStatus}/>
      <TableComponent fetchStudentsData={fetchStudentsData} cohort={currentCohort || 0} tableRows={tableData} setTableData={setTableData} />
    </div>
  );
}
export default Students;
