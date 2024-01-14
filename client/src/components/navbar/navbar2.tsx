import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarWithDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h2>Your Logo</h2>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavbarWithDrawer;
