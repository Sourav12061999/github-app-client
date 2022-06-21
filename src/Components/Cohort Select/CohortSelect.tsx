import React from 'react'
import { Select } from '@chakra-ui/react';
import {Cohort} from "./cohort.types";
interface Props{
  cohorts:Array<Cohort>,
  setCohort:(cohort:number) => void,
}
function CohortSelect({cohorts,setCohort}:Props) {
  return (
    <Select onChange={(e) =>{
      setCohort(+e.target.value);
    }}>
      {
        cohorts.map((el) =>(
          <option key={el._id} value={el.cohort}>{el.cohort}</option>
        ))
      }
    </Select>
  )
}

export default CohortSelect