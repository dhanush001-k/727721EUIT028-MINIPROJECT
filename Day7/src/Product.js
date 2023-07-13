import * as React from 'react';
import {Link} from "react-router-dom"
import './Product.css';
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
  
       


<ul id="ulis">
  <li id="lis"><Link to="/Home"><a href="#home" className='ha'>Home</a></Link></li>
  <li id="lis"><a href="#news" className='ha' id="hactive">Product</a></li>
  
  <li class="dropdown" id="lis">
    <Link to="/Category">
    <a href="javascript:void(0)"  class="dropbtn">Category</a></Link>
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
  <input type='search' placeholder='Search products' className='search1'></input>
 &nbsp;
  <Button variant="contained" className='homebutton1' sx={{ fontSize: 13 ,bgcolor: "#66FFB2",color:"black",height:50,width:100}}>Search</Button><br></br><br></br>
  </div>


  
  
    <div id="pbox">
    <div className='p1'>
          <img src="https://filebroker-cdn.lazada.com.my/kf/S22e98a146de94f5d9cfee5ecc9d3a3ccy.jpg" className='ip1'></img>
          <p id="title">Wheat Flour</p>
          <p id="price">Rs.130 per kg/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/51KuBTBZo4L.jpg" className='ip1'></img>
          <p id="title">Noodles</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://store.calicutgrocers.com/image/cache/catalog/Products/noodles_pasta_vermicelli/Pasta_packet-500x500.png" className='ip1'></img>
          <p id="title">Pasta</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://sabkooch.com/wp-content/uploads/2020/10/moong-dal-500x500-1.jpg" className='ip1'></img>
          <p id="title">Moong Dal</p>
          <p id="price">Rs.50/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://www.jiomart.com/images/product/original/490573208/safal-frozen-green-peas-5-kg-product-images-o490573208-p590335050-0-202203151010.jpg?im=Resize=(1000,1000)" className='ip1'></img>
          <p id="title">Green Peas</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://ritikart.com/cdn/shop/products/fortune-sunlite-refined-sunflower-oil-1-l-pouch--0-20200621.jpg?v=1593063317" className='ip1'></img>
          <p id="title">Sunflower Oil</p>
          <p id="price">Rs.60 per litre/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://www.jiomart.com/images/product/original/490011311/grb-ghee-200-ml-jar-product-images-o490011311-p490011311-0-202203150148.jpg?im=Resize=(1000,1000)" className='ip1'></img>
          <p id="title">Ghee</p>
          <p id="price">Rs.250/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/81Nfmw7n3UL.jpg" className='ip1'></img>
          <p id="title">Crystal Salt</p>
          <p id="price">Rs.20/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/71iGJpGLDmL.jpg" className='ip1'></img>
          <p id="title">Tea</p>
          <p id="price">Rs.52/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://www.spenlo.com/image/cache/catalog/APP/bru_instant_coffee_1-700x700.jpg" className='ip1'></img>
          <p id="title">Coffee</p>
          <p id="price">Rs.68/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

 

  


          <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/61jc7ybMbNL.jpg" className='ip1'></img>
          <p id="title">Cashewnut</p>
          <p id="price">Rs.60/-</p>
          <p id="pho"><button>Add to Cart</button></p>
          </div>

          <div className='p1'>
          <img src="https://deliciousfoods.in/cdn/shop/products/DRYGINGER.png?v=1673867760" className='ip1'></img>
          <p id="title">Dry Ginger</p>
          <p id="price">Rs.20/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>
  

  
         <div className='p1'>
          <img src="https://dookan.com/cdn/shop/products/1FoySO186KbTeUS7KlObpiC_GI4n9tsyl_c966d8fc-7443-4454-acc2-faccb5a9a967.png?v=1678835560" className='ip1'></img>
          <p id="title">Pickle</p>
          <p id="price">Rs.36/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>
  
   
  
     
  
         <div className='p1'>
          <img src="https://tejumasala.com/cdn/shop/products/BLACKPEPPER_1024x1024.png?v=1646483230" className='ip1'></img>
          <p id="title">Pepper Powder</p>
          <p id="price">Rs.32/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>
  
    
  
         <div className='p1'>
          <img src="https://5.imimg.com/data5/QV/ZY/VC/SELLER-87918828/white-vinegar.jpg" className='ip1'></img>
          <p id="title">Vineger</p>
          <p id="price">Rs.50/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>
  
         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/61fJmBuwhfL.jpg" className='ip1'></img>
          <p id="title">Mayonnaise</p>
          <p id="price">Rs.70/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>
  
       
         <div className='p1'>
          <img src="https://dha.0d0.co/product/main/4ce5d33b-dabd-4370-91d8-fabc1315fd2f.jpg" className='ip1'></img>
          <p id="title">Butter</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/71TIsmzlYpL.jpg" className='ip1'></img>
          <p id="title">Honey</p>
          <p id="price">Rs.100/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://5.imimg.com/data5/MQ/JK/KE/SELLER-63757177/600-g-kimia-dates.jpg" className='ip1'></img>
          <p id="title">Dates</p>
          <p id="price">Rs.90/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://assets.shop.loblaws.ca/products/20026703001/b2/en/front/20026703001_front_a06_@2.png" className='ip1'></img>
          <p id="title">Baking soda</p>
          <p id="price">Rs.20/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://harvestgold.in/image/ProductImage/818a8a255136cbe36165ad397ee9a2b4.png" className='ip1'></img>
          <p id="title">Bread</p>
          <p id="price">Rs.20/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://www.bigbasket.com/media/uploads/p/l/40130629_2-pril-dishwash-lime.jpg" className='ip1'></img>
          <p id="title">Dish washing liquid</p>
          <p id="price">Rs.179/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://bettyfresh.com/584-large_default/ujala-fast-wash-laundry-soap-150g.jpg" className='ip1'></img>
          <p id="title">Laundry soap</p>
          <p id="price">Rs.22/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://assets.shop.loblaws.ca/products/20026703001/b2/en/front/20026703001_front_a06_@2.png" className='ip1'></img>
          <p id="title">Floor Cleaner</p>
          <p id="price">Rs.49/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/61Q2gwt85PL._AC_UF894,1000_QL80_.jpg" className='ip1'></img>
          <p id="title">Hand Wash</p>
          <p id="price">Rs.49/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/61mD-4eeZXL.jpg" className='ip1'></img>
          <p id="title">Room Spray</p>
          <p id="price">Rs.39/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

   

         <div className='p1'>
          <img src="https://imgnew.outlookindia.com/uploadimage/library/free_files/jpg/Untitled_2023_02_24_105310.jpg" className='ip1'></img>
          <p id="title">Perfume</p>
          <p id="price">Rs.59/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://m.media-amazon.com/images/I/71enDA8w01L.jpg" className='ip1'></img>
          <p id="title">Shampoo</p>
          <p id="price">Rs.49/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://www.jiomart.com/images/product/original/491350163/colgate-sensitive-soft-toothbrush-pack-of-4-product-images-o491350163-p491350163-0-202203171134.jpg?im=Resize=(420,420)" className='ip1'></img>
          <p id="title">Toothbrush</p>
          <p id="price">Rs.20/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://cdn.grofers.com/app/images/products/sliding_image/481346a.jpg?ts=1653999506" className='ip1'></img>
          <p id="title">Ear Buds</p>
          <p id="price">Rs.25/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://img.fruugo.com/product/0/29/673112290_max.jpg" className='ip1'></img>
          <p id="title">Paper Cups</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://freshlist.in/image/cache/catalog/001-product-images/Aavin/aavin-green-600x600.jpg" className='ip1'></img>
          <p id="title">Milk</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://images.apollo247.in/pub/media/catalog/product/p/a/par0804_1.jpg" className='ip1'></img>
          <p id="title">Hair Oil</p>
          <p id="price">Rs.49/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://www.distacart.com/cdn/shop/products/100Gm_1000x.jpg?v=1621402237" className='ip1'></img>
          <p id="title">Face powder</p>
          <p id="price">Rs.60/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>

         <div className='p1'>
          <img src="https://images-cdn.ubuy.co.in/63c6b16dfcf0bd5e6862fd53-1500-count-bamboo-wooden-toothpicks.jpg" className='ip1'></img>
          <p id="title">Toothpicks</p>
          <p id="price">Rs.30/-</p>
          <p id="pho"><button>Add to Cart</button></p>
         </div>




 


  
    
    </div>
    <br></br>

    
   
    </Box>
   
    
  );
  }