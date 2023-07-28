import axios from 'axios';
import './Post.css';
import React, { useState } from 'react';

function Adpost() {
  const [pid, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

 
  const [imagesUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      pid:pid,
      pname: name,
      pprice:price,
      pdescription:description,
      pimageurl:imagesUrl
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/user/addpro', data);
      const newProductId = response.data.pid;
  
    
      
  
      
      const formData1 = new FormData();
      formData1.append('imageUrl', imagesUrl); // Attach the image file
  
      const imageUploadResponse1 = await axios.post(`http://localhost:8081/api/v1/user/uploadImageUrl/${newProductId}`, formData1, {

      });
  
      console.log('Image Url uploaded successfully!', imageUploadResponse1);

      setId('');
      setName('');
      setPrice('');
      setDescription('');
    
      setImageUrl('');
  
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if needed
    }
  };


  return (
    <>
    
        <div className='mar'>
          <div className='ir'></div>
          <br></br>
          <div id="addbox" >
            <form onSubmit={handleSubmit}>
              <h1>
                <center>Add Product</center>
              </h1>

              <div style={styles.formRow}>
                <label style={styles.label} id="addlabel">Product ID:</label>
                <input
                  type="number"
                  id="id"
                  style={styles.input}
                  value={pid}
                  onChange={(event) => setId(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label} id="addlabel">Product Name:</label>
                <input
                  type="text"
                  id="name"
                  style={styles.input}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label} id="addlabel">Product Price:</label>
                <input
                  type="number"
                  id="count"
                  style={styles.input}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label} id="addlabel">Product Description:</label>
                <input
                  type="text"
                  id="description"
                  style={styles.input}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div style={styles.formRow}>
      <label style={styles.label} id="addlabel">Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        style={styles.input}
        value={imagesUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
    </div>
              

              <div className="submit" style={styles.formRow}>
                <button className="bon">Add</button>
              </div>
            </form>

          
          </div>
       <br></br>

        </div>
   
    </>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    marginTop: '100px',
    margin:'auto',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: 'rgb(205, 196, 196)',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    flex: '1',
  },
  input: {
    flex: '2',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  successMessage: {
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    padding: '10px',
    borderRadius: '3px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Adpost;