import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {TableRow} from "../Table/table.types";
import useAddToColab from "../../Hooks/useAddToColab";
interface Props{
  tableRows: Array<TableRow>,
  isActivePage?:boolean,
}
function MenuComp({tableRows,isActivePage}:Props) {
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
      isActivePage && (<MenuItem onClick={() =>{
        console.log("Ran Script");
        AddToColab(tableRows.filter((el) =>{
          return el.isSelected===true;
        }))
      }}>Run Script</MenuItem>)
    }
  </MenuList>
</Menu>
  )
}

export default MenuComp