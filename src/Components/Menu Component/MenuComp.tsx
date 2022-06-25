import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {TableRow} from "../Table/table.types";
import useAddToColab from "../../Hooks/useAddToColab";
interface Props{
  tableRows: Array<TableRow>,
  isActivePage?:boolean,
  fetchStudentsData:Function,
}
function MenuComp({tableRows,isActivePage,fetchStudentsData}:Props) {
  const AddToColab=useAddToColab();
  return (
  <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() =>{
      console.log(tableRows)
    }}>Delete</MenuItem>
    <MenuItem>Download</MenuItem>
    {
      isActivePage && (<MenuItem onClick={ async ()=>{
        console.log("Ran Script");
        await AddToColab(tableRows.filter((el) =>{
          return el.isSelected===true;
        }))
        await fetchStudentsData();
      }}>Run Script</MenuItem>)
    }
  </MenuList>
</Menu>
  )
}

export default MenuComp