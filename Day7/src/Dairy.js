import * as React from 'react';
import {Link} from "react-router-dom"
import './Dairy.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// import Slideshow from './Slideshow';

import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
// import { ShoppingCart } from '@mui/icons-material';
// import { Category } from '@mui/icons-material';
// import { Feedback } from '@mui/icons-material';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
export default function Category() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 	"#333",height:'70px' }} id="bs" position="fixed">
        <Toolbar>
  
          {/* <IconButton  size="10px"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}>
            <HomeIcon sx={{fontSize:40}}/><p id="nt">Home</p>
            </IconButton>
            
            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <ProductionQuantityLimitsIcon sx={{fontSize:40}}/><p id="nt">Product</p>
            </IconButton>

            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <Category sx={{fontSize:40}}/><p id="nt">Category</p>
            </IconButton>

            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <Feedback sx={{fontSize:40}}/><p id="nt">Feedback</p>
            </IconButton>

            <IconButton  size="small"
            edge="start"
            id="home"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <ShoppingCart sx={{fontSize:40}}/><p id="nt">Cart</p>
            </IconButton> */}
            
            {/* <ul id="ulis">
  <li id="lis"><a className='ha' href="#home">Home</a></li>
  <li id="lis"><a className="ha" href="#news">Product</a></li>
  <li id="lis" ><a id="hactive" className="ha" href="#contact">Category</a></li>
  
  <li id="lis"><a className="ha" href="#about">Feedback</a></li>
  <li id="lis"><a className="ha" href="#about">Cart</a></li>
</ul> */}



<ul id="ulis">
  <li id="lis"><Link to="/Home"><a href="#home" className='ha'>Home</a></Link></li>
  <li id="lis"><Link to="/Product"><a href="#news" className='ha'>Product</a></Link></li>
  
  <li class="dropdown" id="lis">
    <Link to="/Category">
    <a href="javascript:void(0)" id="hactive" class="dropbtn">Category</a></Link>
    <div class="dropdown-content">
    <Link to="/Vegetables">
      <a href="#">Vegetables</a></Link>
      <a href="#">Fruits</a>
      <Link to="/Beverages">
      <a href="#">Cool drinks and beverages</a></Link>
      <Link to="/Dairy">
      <a href="#">Dairy products</a></Link>
      <Link to="/Healthdrinks">
      <a href="#">Health drinks</a></Link>
      <a href="#">BabyCare products</a>
    </div>
  </li>
  <li id="lis"><a href="#news" className='ha'>Feedback</a></li>
  <li id="lis"><a href="#news" className='ha'>Cart</a></li>
</ul>



          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grocery
          </Typography> */}
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <div class="log">
         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
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
   
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        <br></br>
        <br></br>
      </AppBar>
      
      
        <div className='sch1'>
<br></br>
  <input type='search' placeholder='Search Dairy products' className='search1'></input>
 &nbsp;
  <Button variant="contained" className='homebutton1' sx={{ fontSize: 13 ,bgcolor: "#66FFB2",color:"black",height:50,width:100}}>Search</Button><br></br><br></br>
  </div>


  
  
    <div id="dbox">
         <div className='b1'>
          <img src="https://images.jdmagicbox.com/quickquotes/images_main/arokya-milk-and-milk-products-14-01-2021-002-220018753-j7w6g.png" className='ib1'></img>
          <p id="title">Arokya Milk</p>
          <p id="price">Rs.44 per Litre/-</p>
          <p><button>Add to Cart</button></p>
         </div>

         <div className='b2'>
          <img src="https://cdn11.bigcommerce.com/s-kknankib6z/images/stencil/1280x1280/products/750/18577/grb-ghee-500ml-grb__89098.1599945722.jpg?c=2?imbypass=on" className='ib2'></img>
          <p id="title">GRB Ghee 500ml</p>
          <p id="price">Rs.361/-</p>
          <p><button>Add to Cart</button></p>
         </div>

         <div className='b3'>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/281459a.jpg?ts=1681295066" className='ib3'></img>
          <p id="title">Hatsun curd 500ml</p>
          <p id="price">Rs.40/-</p>
          <p><button>Add to Cart</button></p>
         </div>

         <div className='b4'>
          <img src="https://mysaatvik.com/cdn/shop/products/fop_1_530x@2x.png?v=1644417012" className='ib4'></img>
          <p id="title">Amul paneer 200g</p>
          <p id="price">Rs.95/-</p>
          <p><button>Add to Cart</button></p>
         </div>

         <div className='b5'>
          <img src="https://www.bigbasket.com/media/uploads/p/l/104759-2_5-amul-cheese-slices.jpg" className='ib5'></img>
          <p id="title">Amul Cheese slice(5Pcs)</p>
          <p id="price">Rs.80/-</p>
          <p><button>Add to Cart</button></p>
         </div>

         <div className='b6'>
          <img src="https://bestoneggtraymachine.com/wp-content/uploads/2021/04/Duck-Egg-Trays.jpg" className='ib6'></img>
          <p id="title">Egg</p>
          <p id="price">Rs.144 per tray/-</p>
          <p><button>Add to Cart</button></p>
         </div>
    </div>
    <br></br>

    
   
    </Box>
   
    
  );
  }