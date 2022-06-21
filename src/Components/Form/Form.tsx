import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormLabel, Input, Text } from "@chakra-ui/react";
import { FormDataType } from "./Form.types";
import url from "../../backend.url";
import { useToast } from "@chakra-ui/react";
function Form() {
  const [formData, setFormData] = useState<FormDataType>({
    cohort: 0,
    file: null,
  });
  const toast = useToast();
  const Submit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.cohort || !formData.file) {
      toast({
        title: "Not Filled all the fields",
        description: "Please Fill All Fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    } // If any of the fields are empty dont do the fetch request
    const data = new FormData();
    data.append("CSVFile", formData.file || "");
    data.append("cohort", formData.cohort.toString());
    fetch(`${url}/api/submit`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isError === false) {
          toast({
            title: "Student Data Created",
            description: "All Students Has been added. Congrats.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "40px 20px",
        marginTop: "8%",
      }}
    >
      <Text textAlign={"center"} fontSize="5xl">
        Enter The Details Here
      </Text>
      <form onSubmit={Submit}>
        {/* The Input for Cohort Number  */}
        <FormLabel style={{ marginTop: "20px" }}>Cohort Number</FormLabel>
        <Input
          onChange={(event) => {
            setFormData({
              ...formData,
              cohort: +event.target.value,
            });
          }}
          placeholder=""
          id="cohort"
          type="number"
        />
        {/* The Form For the CSV File  */}
        <FormLabel style={{ marginTop: "20px" }}>CSV File</FormLabel>
        <input
          onChange={(event) => {
            setFormData({
              ...formData,
              file: !event.target.files ? null : event.target.files[0],
            });
          }}
          id="csv-file"
          type="file"
          accept=".csv"
        />
        {/* The Submit Button  */}
        <button
          style={{
            display: "block",
            marginInline: "auto",
            marginTop: "20px",
            fontSize: "20px",
            background: "#2196f3",
            padding: "1.5% 3%",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Form;
