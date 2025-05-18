import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PLC Architecture Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
