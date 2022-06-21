import React from 'react'
import { Select } from '@chakra-ui/react';
import {Cohort} from "./cohort.types";
interface Props{
  cohorts:Array<Cohort>
}
function CohortSelect({cohorts}:Props) {
  return (
    <Select>
      {
        cohorts.map((el) =>(
          <option value={el.cohort}>{el.cohort}</option>
        ))
      }
    </Select>
  )
}

export default CohortSelect