import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { TableRow } from "../Table/table.types";
import React, { useState,useEffect,useContext} from "react";
import useUpdateData from "../../Hooks/useUpdateData";
interface Props {
  data: TableRow;
  setState:(data:TableRow) => void,
  addToTeam:Function,
}
function UpdateModal({ data,setState,addToTeam}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: data.name,
    student_code: data.student_code,
    github_username: data.github_username,
  });
  const {isLoading,isSuccess,updateData} = useUpdateData();
  function onInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) {
    setFormData({ ...formData, [key]: event.target.value });
  }
  return (
    <>
      <Button onClick={onOpen}>Update</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Student Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={formData.name}
              onChange={(event) => onInputChange(event, "name")}
              style={{ marginBottom: "10px" }}
              placeholder="Name"
            />
            <Input
              value={formData.student_code}
              style={{ marginBottom: "10px" }}
              onChange={(event) => onInputChange(event, "student_code")}
              placeholder="Student Code"
            />
            <Input
              value={formData.github_username}
              style={{ marginBottom: "10px" }}
              onChange={(event) => onInputChange(event, "github_username")}
              placeholder="Github Username"
            />
          </ModalBody>
          <ModalFooter>
            <Button  colorScheme="blue" mr={3} onClick={() =>{
                updateData({...data,...formData});
                setState({...data,...formData});
                onClose();
            }}>
              Update
            </Button>
            <Button color={"red.500"}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default UpdateModal;
