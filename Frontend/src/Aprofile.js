import React from 'react';
import { Avatar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom'
import './adminhome.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
const Aprofile = () => {
  // Replace these dummy data with actual user details fetched from your application
  const user = {
    name: 'Dhanush',
    email: 'dhanush001@gmail.com',
    profileImageUrl: 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png',
    age: 18,
    role:'Admin',
    phone:9361145853,
    // Add more user data as needed
  };

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="adnavbar">
      <div className="adcontainer">
        
        <div className="admenu-icon" onClick={handleShowNavbar}>
          <MenuIcon></MenuIcon>
        </div>
        <div className={`adnav-elements  ${showNavbar && 'adactive'}`}>
        <ul>
            <li >
              <NavLink to="/AdminHome">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog"></NavLink>
            </li>
         
            <li id="ahcurrent">
              <NavLink to="/Aprofile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/projects"></NavLink>
            </li>
            <li>
              <NavLink to="/Option">Logout</NavLink>
            </li>
            <li>
              <NavLink to="/projects"></NavLink>
            </li>
            <li>
              <NavLink to="/">Switch Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
      

      <div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h2" gutterBottom>
          Admin Profile
        </Typography>
        <Avatar src={user.profileImageUrl} alt={user.name} sx={{ width: 120, height: 120, mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Name: {user.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Age: {user.age}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Role: {user.role}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Phone: {user.phone}
        </Typography>
        {/* Add more user details here */}
      </div>
      <Divider sx={{ my: 4 }} />
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              {/* Add an icon, e.g., <PersonIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* Add an icon, e.g., <ShoppingCartIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Order History" />
          </ListItem>
          {/* Add more profile options, e.g., settings, addresses, payment methods, etc. */}
        </List>
      </div>
    </div>


    </nav>
  );
};

export default Aprofile;



