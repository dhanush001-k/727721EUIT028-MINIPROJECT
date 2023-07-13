import * as React from 'react';
import {Link} from "react-router-dom"
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// import Slideshow from './Slideshow';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
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


  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v',
      
     
    },
    {
      url: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg'
      
    },
    {
      url: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2F2d4ea32ed14a1f75cf1b454748dfa99cd4a1fa62'
    
    },
  ];
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 	"#333",height:'68px' }} id="bs" position="fixed">
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
  <li id="lis"><a href="#home" className='ha' id="hactive">Home</a></li>
  <Link to="/Product">
  <li id="lis"><a href="#news" className='ha'>Product</a></li>
  </Link>
  <li class="dropdown" id="lis">
    <Link to="/Category">
    <a href="javascript:void(0)" class="dropbtn">Category</a>
    </Link>
    <div class="dropdown-content">
      <Link to="/Vegetables">
      <a href="#">Vegetables</a></Link>
      <a href="#">Fruits</a>
      <Link to="Beverages">
      <a href="#">Cool drinks and beverages</a></Link>
      <Link to="Dairy">
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
      
      <div className='sc1'>
        <p id="wel">Welcome to online grocery shopping</p>
      </div>
      
        {/* <div className='sc1'>

  <input type='search' placeholder='Search category' className='search1'></input>
 &nbsp;
  <Button variant="contained" className='homebutton1' sx={{ fontSize: 13 ,bgcolor: "#66FFB2",color:"black",height:50,width:100}}>Search</Button><br></br><br></br>
  </div> */}


  

<center>
  <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,height:600 }}>
               
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </center>

      <div className='sc1'>
        <p id="off">Offers and Deals</p>
      </div>
  
    <div id="hbox">
      
        
        <p className='name'>Fresh Fruits and Vegetables</p>
         <div className='container'>
          <img className="image" src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/12/vegetables.jpg"></img>
          <div className='text-block'>
         <p>Upto 25% Discount </p>
         </div>
         </div>


         <p className='name'>Dairy Products</p>
         <div className='container'>
          <img className="image" src="https://www.ucdavis.edu/sites/default/files/styles/sf_landscape_16x9/public/images/article/milk-cheese-yogurt.jpg?h=56d53079&itok=JYtxxYul"></img>
          <div className='text-block'>
         <p>Upto 25% Discount </p>
         </div>
         </div>
 
         <p className='name'>Meat Products</p>
         <div className='container'>
          <img className="image" src="https://images.summitmedia-digital.com/smartpar/images/2020/03/25/20200325-2pm_mainimage_rachel.jpg"></img>
          <div className='text-block'>
         <p>Upto 25% Discount </p>
         </div>
         </div>
         
    </div>
    <div className='footer'>
      <div id="fbox">
        <p id="fhead">Contact</p>
        <a href="" id="fcon">Call Center</a>
        <br></br>
        <a href="" id="fcon">Email Us</a>
        <br></br>
        <a href="" id="fcon">Help Center</a>
      </div>
      <div id="fbox2">
        <p id="fhead">Support & Resources</p>
        <a href="" id="fcon">Support</a>
        <br></br>
        <a href="" id="fcon">FAQ</a>
        <br></br>
        <a href="" id="fcon">Terms and Conditions</a>
        <br></br>
        <a href="" id="fcon">Help & Support</a>

      </div>
      <div id="fbox3">
        <p id="fhead">About</p>
        <a href="" id="fcon">About us</a>
        <br></br>
        <a href="" id="fcon">Terms and Policy</a>
        <br></br>
        <a href="" id="fcon">Community</a>
      </div>
      <center>
      <div className="hhr"></div>
      </center>
      <p id="fbot">@Copyrights.All rights reserved</p>
    
    </div>

    
   
    </Box>
   
    
  );
  }