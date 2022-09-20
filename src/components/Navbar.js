import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navber() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>  Home </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>  About </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/contact" sx={{ color: 'inherit', textDecoration: 'none' }}>  Contact</NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="signup" sx={{ color: 'inherit', textDecoration: 'none' }}>  SignUp </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="login" sx={{ color: 'inherit', textDecoration: 'none' }}>  LogIn </NavLink>
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
