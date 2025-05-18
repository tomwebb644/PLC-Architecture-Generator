import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ open, onClose, setActiveView }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItem button onClick={() => { setActiveView("form"); onClose(); }}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => { setActiveView("architecture"); onClose(); }}>
          <ListItemText primary="Generate Architecture" />
        </ListItem>
        <ListItem button onClick={() => { setActiveView("settings"); onClose(); }}>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
