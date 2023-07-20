import * as React from 'react';
import {Link} from "react-router-dom"
import './Dairy.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import { useState,useEffect } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
const Product = ({ addToCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems,] = useState([]);


  const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQuantityChange = (event, productId) => {
    const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
    setProductQuantities(newQuantities);
  };


  const products = [
     
    {
      id: 1,
      name: 'Milk',
      image: 'https://ik.imagekit.io/dunzo/1650547152150_product_5c2638fbbbc7ac725f291df3_1.jpg',
      price: 24,
      },
      {
      id: 2,
      name: 'Cheese',
      image: 'https://dlecta.com/cdn/shop/products/CheeseSlices-200Gms-1.jpg?v=1641562938',
      price: 165,
      },
      {
      id: 3,
      name: 'Icecream',
      image: 'https://m.media-amazon.com/images/I/51+NnTLP0-L.jpg',
      price: 175,
      },
      {
      id: 4,
      name: 'Buttermilk',
      image: 'https://www.bigbasket.com/media/uploads/p/l/161899-2_9-amul-masti-buttermilk-spice.jpg',
      price: 15,
      },
      {
      id: 5,
      name: 'Ghee',
      image: 'https://www.bigbasket.com/media/uploads/p/l/257871_4-heritage-cow-ghee.jpg',
      price: 691,
      },
      {
      id: 6,
      name: 'Butter',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40006899-2_6-amul-cooking-butter-unsalted.jpg',
      price: 275,
      },
      {
      id: 7,
      name: 'Curd',
      image: 'https://www.bigbasket.com/media/uploads/p/l/60000388_3-hatsun-cup-curd.jpg',
      price: 40,
      },
      {
      id: 8,
      name: 'Milk Powder',
      image: 'https://d33su1nl84sq93.cloudfront.net/wp-content/uploads/2022/10/Amul-Sagar-Simmed-Milk-Powder-Pouch-1-kg.jpg',
      price: 155,
      },
      {
      id: 9,
      name: 'Sour cream',
      image: 'https://productimages.coles.com.au/productimages/3/3676946.jpg',
      price: 150,
      },
      // {
      // id: 10,
      // name: 'Pickle',
      // image: 'https://dookan.com/cdn/shop/products/1FoySO186KbTeUS7KlObpiC_GI4n9tsyl_c966d8fc-7443-4454-acc2-faccb5a9a967.png?v=1678835560',
      // price: 36,
      // },
      // {
      // id: 11,
      // name: 'Pepper Powder',
      // image: 'https://tejumasala.com/cdn/shop/products/BLACKPEPPER_1024x1024.png?v=1646483230',
      // price: 32,
      // },
      // {
      // id: 12,
      // name: 'Vineger',
      // image: 'https://5.imimg.com/data5/QV/ZY/VC/SELLER-87918828/white-vinegar.jpg',
      // price: 50,
      // },
    ];

    const handleAddToCart = (product) => {
      addToCart(product); // Call the addToCart function from props
      
          const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
          const item = { ...product, quantity };
          addToCart(item);
        };
    
    

    
    
    
    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);




  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 	"#333",height:'70px' }} id="bs" position="fixed">
        <Toolbar>
  


<ul id="ulis">
  <li id="lis"><Link to="/Home"><a href="#home" className='ha'>Home</a></Link></li>
  <li id="lis"><Link to="/Product"><a href="#news" className='ha'>Products</a></Link></li>
  
  <li class="dropdown" id="lis">
    <Link to="/Category">
    <a href="javascript:void(0)" id="hactive" class="dropbtn">Category</a></Link>
    <div class="dropdown-content">
      <Link to="/Vegetables">
      <a href="#" id="vactive">Vegetables</a></Link>
      <Link to="/Beverages">
      <a href="#">Cool drinks and beverages</a></Link>
      <Link to="/Dairy">
      <a href="#">Dairy products</a></Link>
      <Link to="/Healthdrinks">
      <a href="#">Health drinks</a></Link>
      <a href="#">Fruits</a>
      <a href="#">BabyCare products</a>
    </div>
  </li>
  <li id="lis"><Link to="/FeedbackForm"><a href="#news" className='ha'>Feedback</a></Link></li>
  <li id="lis"><Link to="CartPage"><a href="#news" className='ha'>Cart</a></Link></li>
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


  
  {/* <p id="vho"><button onClick={decrement}>Remove from Cart</button></p> */}
    <div id="dbox">
    <Grid  container spacing={2} align="center" >
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={4} key={product.id}>
            <Card>
              <CardMedia style={{border:"4px solid white",width:"185px"}}component="img" height="250" src={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h9" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                ₹{product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  type="number"
                  label="Quantity"
                  variant="outlined"
                  value={productQuantities[product.id] || 1} // Use the selected quantity or default to 1 if not set
                  onChange={(event) => handleQuantityChange(event, product.id)}
                  inputProps={{ min: 1 }}
                  sx={{ width: '80px', mr: 2 }}
                />

              <Button sx={{color:'red'}}onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    <br></br>

    
   
    </Box>
   
    
  );
  }
  export default Product;