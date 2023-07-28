import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
import './Get.css'
const Getpro = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product details from the API
    axios.get('http://localhost:8081/api/v1/user/showpro')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, []);

  return (
    <div>
      <h1 id="geth">Available Products</h1>
      {/* {products.map(product => (
        <div key={product.pid}>
          <h2>{product.pname}</h2>
          {product.pimageurl && (
            <img
              src={product.pimageurl} // Use the imageUrl directly
              alt={product.pname}
              style={{ width: '200px', height: '200px' }}
            />
          )}
          <p>Price: {product.pprice}</p>
          <p>{product.pdescription}</p>
          <hr />
        </div>
      ))} */}
      
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

         
        </Card>
        <br></br>
      </Grid>
     
      </div>
    ))}
  </Grid>
</div>
   
  );
};

export default Getpro;








