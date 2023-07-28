import * as React from 'react';
import {Link} from "react-router-dom"
import './Product.css';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import { useState,useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch,useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import store1 from './store1'
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import axios from 'axios';
import Logout from '@mui/icons-material/Logout';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
const Product = ({ addToCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // const [cartItems, setCartItems,] = useState([]);
  const [products, setProducts] = useState([]);






  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/user/showpro')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, []);   










  const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));



  const counter=useSelector((state)=>state.counter);
  const increment =()=>{
    dispatch({type:"INC"})
  }
  // const decrement =()=>{
  //   dispatch({type:"DEC"})
  // }
  const dispatch=useDispatch();







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

  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


    const handleAddToCart = (product) => {
      addToCart(product); // Call the addToCart function from props
    
          const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
          const item = { ...product, quantity };
          setCartItems((prevCartItems) => [...prevCartItems, item]);
          addToCart(item);
        };
        const removeFromCart = (itemId) => {
          setCartItems(cartItems.filter((item) => item.id !== itemId));
        };
    
        const [cartItems, setCartItems] = useState(() => {
          const savedCartItems = localStorage.getItem('cartItems');
          return savedCartItems ? JSON.parse(savedCartItems) : [];
        });
        
        useEffect(() => {
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }, [cartItems]);


        const handleSearch = (event) => {
          setSearchTerm(event.target.value);
        };

//   const filteredProducts = products.filter((product) =>
//   product.name.toLowerCase().includes(searchTerm.toLowerCase())
// );





  return (
    <div>
    <nav className="pronavbar">
      <div className="procontainer">
        <div className="promenu-icon" onClick={handleShowNavbar}>
       <MenuIcon></MenuIcon>
        </div>
        <div className={`pronav-elements  ${showNavbar && 'proactive'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li id="pcurrent">
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/Category">Category</NavLink>
            </li>
            <li>
              <NavLink to="/Feedback">Feedback</NavLink>
            </li>
            <li>
              <NavLink to="/CartPage">Cart {cartItems.length}</NavLink>
            </li>

            <li>
          <input
            type='text'
            className='search-input'
            placeholder='Search products...'
            value={searchTerm}
            onChange={handleSearch}
          />
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
          Settings{counter}
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



   
     

 


  
    
    <br></br>
<div>


<Grid  container spacing={2} align="center" >
    {products.map((product) => (
      <div key={product.pid}>
      <Grid item xs={12} sm={3} md={11} key={product.pid}>
        <Card>
          <CardMedia style={{border:"2px solid white",width:"300px",padding:"50px"}}component="img" height="350" src={product.pimageurl} alt={product.pname} />
          <CardContent>
            <Typography variant="h9" component="div">
              {product.pname}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            ₹{product.pprice} {product.pdescription}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography> */}
          </CardContent>



          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  type="number"
                  id="quanbox"
                  label="Quantity"
                  variant="outlined"
                  value={productQuantities[product.id] || 1} 
                  onChange={(event) => handleQuantityChange(event, product.id)}
                  inputProps={{ min: 1 }}
                  sx={{ width: '80px', mr: 2 }}
                  />
               &nbsp;  &nbsp;  &nbsp;
              <Button id="addtocart" sx={{color:'white'}} onClick={() => handleAddToCart(product)} >Add to Cart</Button>
              </Box>

         
        </Card>
        <br></br>
      </Grid>
     
      </div>
    ))}
  </Grid>
</div>
    
    </nav>
  
        </div>
    
  );
  }

  export default Product;
  
  


  //   const products = [
     
// {
//   id: 1,
//   name: 'Moong Dal',
//   image: 'https://sabkooch.com/wp-content/uploads/2020/10/moong-dal-500x500-1.jpg',
//   price: 50,
//   description:' Per kg'
//   },
//   {
//   id: 2,
//   name: 'Green Peas',
//   image: 'https://www.jiomart.com/images/product/original/490573208/safal-frozen-green-peas-5-kg-product-images-o490573208-p590335050-0-202203151010.jpg?im=Resize=(1000,1000)',
//   price: 30,
//   description:' Per Packet'
//   },
//   {
//   id: 3,
//   name: 'Sunflower Oil',
//   image: 'https://ritikart.com/cdn/shop/products/fortune-sunlite-refined-sunflower-oil-1-l-pouch--0-20200621.jpg?v=1593063317',
//   price: 60,
//   description:' Per litre'
//   },
//   {
//   id: 4,
//   name: 'Ghee',
//   image: 'https://www.jiomart.com/images/product/original/490011311/grb-ghee-200-ml-jar-product-images-o490011311-p490011311-0-202203150148.jpg?im=Resize=(1000,1000)',
//   price: 250,
//   description:' Per bottle(500gm)'
//   },
//   {
//   id: 5,
//   name: 'Crystal Salt',
//   image: 'https://m.media-amazon.com/images/I/81Nfmw7n3UL.jpg',
//   price: 20,
//   description:' Per kg'
//   },
//   {
//   id: 6,
//   name: 'Tea',
//   image: 'https://m.media-amazon.com/images/I/71iGJpGLDmL.jpg',
//   price: 52,
//   description:' Per packet(250gm)'
//   },
//   {
//   id: 7,
//   name: 'Coffee',
//   image: 'https://www.spenlo.com/image/cache/catalog/APP/bru_instant_coffee_1-700x700.jpg',
//   price: 68,
//   description:' Per packet(250gm)'
//   },
//   {
//   id: 8,
//   name: 'Cashewnut',
//   image: 'https://m.media-amazon.com/images/I/61jc7ybMbNL.jpg',
//   price: 60,
//   description:' Per packet(250gm)'
//   },
//   {
//   id: 9,
//   name: 'Dry Ginger',
//   image: 'https://deliciousfoods.in/cdn/shop/products/DRYGINGER.png?v=1673867760',
//   price: 20,
//   description:' Per kg'
//   },
//   {
//   id: 10,
//   name: 'Pickle',
//   image: 'https://dookan.com/cdn/shop/products/1FoySO186KbTeUS7KlObpiC_GI4n9tsyl_c966d8fc-7443-4454-acc2-faccb5a9a967.png?v=1678835560',
//   price: 36,
//   description:' Per bottle(250gm)'
//   },
//   {
//   id: 11,
//   name: 'Pepper Powder',
//   image: 'https://tejumasala.com/cdn/shop/products/BLACKPEPPER_1024x1024.png?v=1646483230',
//   price: 32,
//   description:' Per packet(100gm)'
//   },
//   {
//   id: 12,
//   name: 'Vineger',
//   image: 'https://5.imimg.com/data5/QV/ZY/VC/SELLER-87918828/white-vinegar.jpg',
//   price: 50,
//   description:' Per bottle(500ml)'
//   },
//   {
//   id: 13,
//   name: 'Mayonnaise',
//   image: 'https://m.media-amazon.com/images/I/61fJmBuwhfL.jpg',
//   price: 70,
//   description:' Per bottle(250gm)'
//   },
//   {
//   id: 14,
//   name: 'Butter',
//   image: 'https://dha.0d0.co/product/main/4ce5d33b-dabd-4370-91d8-fabc1315fd2f.jpg',
//   price: 30,
//   description:' Per packet'
//   },
//   {
//   id: 15,
//   name: 'Honey',
//   image: 'https://m.media-amazon.com/images/I/71TIsmzlYpL.jpg',
//   price: 100,
//   description:' Per bottle(250ml)'
//   },
//   {
//   id: 16,
//   name: 'Dates',
//   image: 'https://5.imimg.com/data5/MQ/JK/KE/SELLER-63757177/600-g-kimia-dates.jpg',
//   price: 90,
//   description:' Per kg'
//   },
//   {
//   id: 17,
//   name: 'Yogurt',
//   image: 'https://www.bigbasket.com/media/uploads/p/l/40281258_1-milky-mist-greek-yogurt-natural-high-protein-no-added-sugar.jpg',
//   price: 30,
//   description:' Per packet(100gm)'
//   },
//   {
//   id: 18,
//   name: 'Bread',
//   image: 'https://harvestgold.in/image/ProductImage/818a8a255136cbe36165ad397ee9a2b4.png',
//   price: 20,
//   description:' Per packet'
//   },
//   {
//   id: 19,
//   name: 'Dish washing liquid',
//   image: 'https://www.bigbasket.com/media/uploads/p/l/40130629_2-pril-dishwash-lime.jpg',
//   price: 179,
//   description:' Per lite'
//   },
//   {
//   id: 20,
//   name: 'Laundry soap',
//   image: 'https://bettyfresh.com/584-large_default/ujala-fast-wash-laundry-soap-150g.jpg',
//   price: 22,
//   description:' Per packet'
//   },
//   {
//   id: 21,
//   name: 'Cookies',
//   image: 'https://www.elvan.com.tr/merba-nougatelli-cookies-175-gr-1-paket-unlu-mamuller-merba-2401-10-K.jpg',
//   price: 49,
//   description:' Per packet'
//   },
//   {
//   id: 22,
//   name: 'Hand Wash',
//   image: 'https://m.media-amazon.com/images/I/61Q2gwt85PL._AC_UF894,1000_QL80_.jpg',
//   price: 49,
//   description:' Per bottle'
//   },
//   {
//   id: 23,
//   name: 'Perfume',
//   image: 'https://imgnew.outlookindia.com/uploadimage/library/free_files/jpg/Untitled_2023_02_24_105310.jpg',
//   price: 59,
//   description:' Per bottle(250ml)'
//   },
//   {
//   id: 24,
//   name: 'Shampoo',
//   image: 'https://m.media-amazon.com/images/I/71enDA8w01L.jpg',
//   price: 49,
//   description:' Per bottle(250ml)'
//   },
//   {
//   id: 25,
//   name: 'Toothbrush',
//   image: 'https://www.jiomart.com/images/product/original/491350163/colgate-sensitive-soft-toothbrush-pack-of-4-product-images-o491350163-p491350163-0-202203171134.jpg?im=Resize=(420,420)',
//   price: 20,
//   description:' '
//   },
//   {
//   id: 26,
//   name: 'Ear Buds',
//   image: 'https://cdn.grofers.com/app/images/products/sliding_image/481346a.jpg?ts=1653999506',
//   price: 25,
//   description:' Per box'
//   },
//   {
//   id: 27,
//   name: 'Paper Cups',
//   image: 'https://img.fruugo.com/product/0/29/673112290_max.jpg',
//   price: 30,
//   description:' Per set'
//   },
//   {
//   id: 28,
//   name: 'Milk',
//   image: 'https://freshlist.in/image/cache/catalog/001-product-images/Aavin/aavin-green-600x600.jpg',
//   price: 30,
//   description:' Per packet(500ml)'
//   },
//   {
//   id: 29,
//   name: 'Hair Oil',
//   image: 'https://images.apollo247.in/pub/media/catalog/product/p/a/par0804_1.jpg',
//   price: 49,
//   description:' Per bottle(250ml)'
//   },
//   {
//   id: 30,
//   name: 'Face powder',
//   image: 'https://www.distacart.com/cdn/shop/products/100Gm_1000x.jpg?v=1621402237',
//   price: 60,
//   description:' Per bottle(250gm)'
//   },
//   {
//   id: 31,
//   name: 'Toothpicks',
//   image: 'https://images-cdn.ubuy.co.in/63c6b16dfcf0bd5e6862fd53-1500-count-bamboo-wooden-toothpicks.jpg',
//   price: 30,
//   description:' Per box'
//   },
//   {
//     id: 32,
//     name: 'Noodles',
//     image: 'https://m.media-amazon.com/images/I/51KuBTBZo4L.jpg',
//     price: 30,
//     description:' Per packet'
//     },
//     {
//       id: 33,
//       name: 'WheatFlour',
//       image: 'https://filebroker-cdn.lazada.com.my/kf/S22e98a146de94f5d9cfee5ecc9d3a3ccy.jpg',
//       price: 70,
//       description:' Per kg'
//       },
//       {
//         id: 34,
//         name: 'Maida',
//         image: 'https://www.jiomart.com/images/product/original/491695705/fortune-maida-refined-wheat-flour-500-g-product-images-o491695705-p590040929-0-202306091505.jpg?im=Resize=(1000,1000)',
//         price: 90,
//         description:' Per kg'
//         },
//         {
//           id: 35,
//           name: 'Toothpaste',
//           image: 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/en-us/products/toothpaste/035000521231-packshot.png',
//           price: 30,
//           description:''
//           },
//           {
//             id: 36,
//             name: 'Comb',
//             image: 'https://images-cdn.ubuy.co.in/634efdbb35339d71954c7005-eq-hair-brush-and-comb.jpg',
//             price: 50,
//             description:''
//             },
    
//     ];