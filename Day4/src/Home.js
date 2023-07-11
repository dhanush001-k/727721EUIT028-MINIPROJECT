import * as React from 'react';
// import script from'./script.js'
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Category } from '@mui/icons-material';
import { Feedback } from '@mui/icons-material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 	"#FFBE7B",height:'65px' }}  position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <div class="dropdown">
            <MenuIcon />
            <div class="dropdown-content">
  <p id="dt">dropdown</p>
  </div>
  </div>
          </IconButton>
          <IconButton  size="10px"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}>
            <HomeIcon/><p id="nt">Home</p>
            </IconButton>
            
            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <ProductionQuantityLimitsIcon/><p id="nt">Product</p>
            </IconButton>

            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <Category/><p id="nt">Category</p>
            </IconButton>

            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <Feedback/><p id="nt">Feedback</p>
            </IconButton>

            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <ShoppingCart/><p id="nt">Cart</p>
            </IconButton>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grocery
          </Typography> */}
         
          <Avatar className='profile' sx={{ width: 45, height: 45 ,bgcolor : "green"  }}>D</Avatar>
         
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        <br></br>
        <br></br>
      </AppBar>
    </Box>
   
    
  );
  }
  
  // import React from 'react'
  function Home() {
    return (
      <div>
        
          <p>Hello</p>
      </div>
    
    )
  }
 