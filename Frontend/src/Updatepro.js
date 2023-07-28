import axios from 'axios';
import './Put.css';
import React, { useState } from 'react';

function Updatepro() {
  const [pid, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      pid:pid,
      pname: name,
      pprice: price,
      pdescription:description,
    };

    try {
        const response = await axios.put(`http://localhost:8081/api/v1/user/updatepro/${pid}`, data);
  
        // Reset the form fields if needed
        setId('');
        setName('');
        setPrice('');
        setDescription('');
      } catch (error) {
        console.error('Error:', error);
        // Handle errors if needed
      }
    };


  return (
    <>
        <div className='pmar'>
      <div className='ig'></div>
      <br></br>
          <div id="updatebox">
            <form onSubmit={handleSubmit}>
              <h1>
                <center>Update Product</center>
              </h1>

              <div style={styles.formRow}>
                <label style={styles.label} id="updatelabel">Product ID:</label>
                <input
                  type="number"
                  id="id"
                  style={styles.input}
                  value={pid}
                  onChange={(event) => setId(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label} id="updatelabel">Product Name:</label>
                <input
                  type="text"
                  id="name"
                  style={styles.input}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label} id="updatelabel">Product Price:</label>
                <input
                  type="number"
                  id="count"
                  style={styles.input}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label} id="updatelabel">Product Description:</label>
                <input
                  type="text"
                  id="description"
                  style={styles.input}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              

              <div className="submit" style={styles.formRow}>
                <button className="upbtn">Update</button>
              </div>
            </form>

          
          </div>
       
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
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

export default Updatepro;