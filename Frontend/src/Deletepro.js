import axios from 'axios';
import './delete.css';
import React, { useState } from 'react';

function Deletepro() {
  const [pid, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/user/deletepro/${pid}`);
      // Reset the id after successful deletion
      setId('');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if needed
    }
  };

  return (
    <>
        <div className='delbg'>
      <div className='ig'>
          <div id="delbox">
            <form onSubmit={(event) => event.preventDefault()}>
              <h1>
                <center>Delete Product</center>
              </h1>

              <div style={styles.formRow}>
                <label style={styles.label} id="dellabel">Product ID:</label>
                <input
                  type="number"
                  id="id"
                  style={styles.input}
                  value={pid}
                  onChange={(event) => setId(event.target.value)}
                />
              </div>

              <div className="submit" style={styles.formRow}>
                <button className="delbtn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>
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

export default Deletepro;