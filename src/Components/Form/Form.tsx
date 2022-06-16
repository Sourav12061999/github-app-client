import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { FormType } from "./Form.types";
function Form() {
    const [formData, setFormData] = useState<FormType>({
        cohort:0,
    })
    const cohortChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
      setFormData((prev:FormType)=> {
          return {
              ...prev,
              cohort:+event.target.value
          }
      })
    }

    const csvChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData((prev:FormType)=> {
            return {
                ...prev,
                csv:event.target.value
            }
        })
    }

    const Submit = () =>{
        console.log(formData);
    }
  return (
    <Container
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "40px 20px",
        marginTop:"8%"
      }}
    >
      <Text textAlign={"center"} fontSize="5xl">
        Enter The Details Here
      </Text>

      <FormControl isRequired>
          {/* The Input for Cohort Number  */}
        <FormLabel style={{marginTop:"20px"}}>Cohort Number</FormLabel>
        <Input onChange={cohortChange} placeholder="" id="cohort" type="number" />
        <FormHelperText>Enter the Cohort Number of the Batch</FormHelperText>

        {/* The Form For the CSV File  */}
        <FormLabel style={{marginTop:"20px"}}>CSV File</FormLabel>
        <input onChange={csvChange}  id="csv-file" type="file" accept=".csv" />
        <FormHelperText>
          Here upload the CSV file that contails all the Student Names, their
          Usernames and their Student Codes
        </FormHelperText>


        {/* The Submit Button  */}
        <Button
          style={{ display: "block", marginInline: "auto", marginTop: "20px" }}
          colorScheme="teal"
          variant="solid"
          onClick={Submit}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
}

export default Form;
