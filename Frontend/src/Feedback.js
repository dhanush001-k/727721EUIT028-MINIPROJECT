import React, { useState } from 'react';
import './feed.css'
import {Link} from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import stored from './stored'

const Feedback = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can send the 'formData' object to your server using fetch or Axios.
    // For this example, let's just log the data to the console:
    console.log("Form data:", formData);
    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      rating: '',
      comments: '',
    });
  };

  return (
    <nav className="fenavbar">
    <div className="fecontainer">
      <div className="femenu-icon" onClick={handleShowNavbar}>
     <MenuIcon></MenuIcon>
      </div>
      <div className={`fenav-elements  ${showNavbar && 'feactive'}`}>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Products">Product</NavLink>
          </li>
          <li>
            <NavLink to="/Category">Category</NavLink>
          </li>
          <li  id="fecurrent">
            <NavLink to="/Feedback">Feedback</NavLink>
          </li>
          <li>
            <NavLink to="/CartPage">Cart</NavLink>
          </li>
        </ul>
      </div>

      <div class="log">
         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            
            <Avatar sx={{ width: 40, height: 40 ,bgcolor: "green"}} id="avatar">D</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/Profile">
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem></Link>
        
        <Divider />
        <Link to="/">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Switch account
        </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
         <Link to="/">Logout</Link>
        </MenuItem>
      </Menu>
          </div>
    </div>

     <div>
       <h2 id="fh">Feedback Form</h2>
       <div className='form-container'>
       <form onSubmit={handleSubmit}>
         <label>
           Name:
           <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Rating:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Below Average</option>
            <option value="1">1 - Poor</option>
          </select>
        </label>

        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
          />
        </label>
         <center>
        <input type="submit" value="Submit" /></center>
      </form>
    </div>
    </div>




 
   





  
  <br></br>
      </nav>

      );
    };
    
    export default Feedback;
   