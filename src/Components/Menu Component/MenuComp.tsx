import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {TableRow} from "../Table/table.types";
interface Props{
  tableRows: Array<TableRow>,
}
function MenuComp({tableRows}:Props) {
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
    <MenuItem>Run Script</MenuItem>
  </MenuList>
</Menu>
  )
}

export default MenuComp