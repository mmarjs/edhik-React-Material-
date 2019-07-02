/**
 * header nav (hamicon) component
 */
/* eslint-disable */
import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

function Hamicon() {
   return (
      <IconButton color="inherit" aria-label="Menu">
         <MenuIcon />
      </IconButton>
   )
}

export default Hamicon;