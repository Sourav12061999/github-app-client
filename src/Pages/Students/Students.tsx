import React,{useEffect,useState} from 'react'
import TableComponent from '../../Components/Table/Table';
import CohortSelect from '../../Components/Cohort Select/CohortSelect';
import url from "../../backend.url";
function Students() {
  const [cohortList, setCohortList] = useState([]);
  const [currentCohort, setCurrentCohort] = useState<number | null>(null);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch(`${url}/api/Cohorts`)
    .then((res) => res.json())
    .then((res) =>{
      setCohortList(res);
      if(res.length>0){
        setCurrentCohort(res[0].cohort);
      }
    })
    .catch((error) =>{
      console.log(error);
    })
  }, [])
  useEffect(() => {
    if(currentCohort === null){
      return ;
    }
    fetch(`${url}/api/students/${currentCohort}`)
    .then((res) => res.json())
    .then((res) =>{
      setTableData(res);
    })
    .catch((error) =>{
      console.log(error);
      
    })
  }, [currentCohort])
  
  return (
    <div style={{width:"80%", marginInline:"auto",marginTop:"30px"}}>
      <CohortSelect setCohort={setCurrentCohort} cohorts={cohortList}/>
      <TableComponent cohort={currentCohort|| 0} tableRows={tableData}/>
    </div>
  )
}

export default Students