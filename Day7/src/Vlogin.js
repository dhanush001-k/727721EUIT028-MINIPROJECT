import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './vlogin.css'
const Vlogin = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
 
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in form submission
  };
 
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up form submission
  };

  const[name,setName]=useState('');
//   const[shopName,setShopName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[number,setNumber]=useState('');
  const[address,setAddress]=useState('');


  const handleNameChange=(event) =>
  {
      setName(event.target.value);
  };

//   const handleShopNameChange=(event)=>
//   {
//       setShopName(event.target.value);
//   };


const handleEmailChange=(event)=>
{
  setEmail(event.target.value);
};

const handlePasswordChange=(event)=>
{
 setPassword(event.target.value);
};

const handleNumberChange=(event)=>
{
 setNumber(event.target.value);
};

const handleAddressChange=(event)=>
{
  setAddress(event.target.value);
};



  return (
  
    <div className='bg'>
      {/* <Link to="/">
       <div className='bk'>
            <button className='bk-button'><img src="https://cdn-icons-png.flaticon.com/128/7915/7915208.png">
                </img><span>Back</span></button>
                </div>
                </Link> */}
      <div className="login-wrap">
        
      <div className="login-html">
        <h1 id="vl">Vendor Form</h1>
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          checked={isSignIn}
          onChange={() => setIsSignIn(true)}
        />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input
          id="tab-2"
          type="radio"
          name="tab"
          className="sign-up"
          checked={!isSignIn}
          onChange={() => setIsSignIn(false)}
        />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className='imge'></div>
        <div className="login-form">
          {isSignIn ? (
           
            <form onSubmit={handleSignInSubmit}>
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                     Email
                  </label>
                  <input id="user" type="email" className="input" value={email}
                 onChange={handleEmailChange} required/>
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="check">
                    <span className="icon"></span> Keep me Signed in
                  </label>
                  <a id="forgot" href="#forgot">Forgot Password?</a>
                </div>
                <Link to="/Home">
                <div className="group">
                  <input type="submit" className="button" value="Sign In" required/>
                </div>
                </Link>
                <div className="foot-lnk">
                </div>
                
                <p className='or'>or</p>
            <div className='sgoo'>
            <button className='image-button'><img src="https://static.vecteezy.com/system/resources/previews/022/484/503/original/google-lens-icon-logo-symbol-free-png.png">
                </img><span>Sign in with google</span></button>
                </div>
                <div className="hr"></div>
                <p>Don't have an account?</p>
                <div className="ufoot-lnk">
                  <label htmlFor="tab-2">create new account</label>
                </div>

                
              </div>
            </form>
              
            
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Firstname
                  </label>
                  <input id="user" type="text" className="input" value={name} 
                 onChange={handleNameChange} required />
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">
                    Shopname
                  </label>
                  <input id="user" type="text" className="input" required />
                </div>
                <div className="group">
                  <label  className="label">
                    Email Address
                  </label>
                  <input id="pass" type="email" className="input"  value={email}
                 onChange={handleEmailChange} required/>
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    ContactNumber
                  </label>
                  <input
                    id="pass"
                    type="text"
                    className="input"
                    data-type="text"
                    value={number}
                    onChange={handleNumberChange}
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    ShopAddress
                  </label>
                  <textarea rows="2" cols="20"
                    id="pass"
                    type="text"
                    className="input"
                    data-type="text"
                    value={address}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                {/* <div className="group">
                <label class="label">First Name</label><br></br>
                <input class="input" id="user"type="text"
               
                 value={fname} 
                 onChange={handlefNameChange} 
                 required></input>
            </div>
            <div className="group">
                <label class="label">Last Name</label><br></br>
                <input class="input" type="text"
                
                 value={lname} 
                 onChange={handlelNameChange} 
                 required></input>
            </div>
           
            <div className="group">
                <label class="label">Email</label><br></br>
                <input class="input" type="email"
                 
                 value={email}
                 onChange={handleEmailChange} 
                 required></input>
            </div>
            <div className="group">
                <label class="label">Password</label><br></br>
                <input class="input" type="password"
                 
                 value={password}
                 onChange={handlePasswordChange}
                  required></input>
            </div>
            <div className="group">
                <label class="label">Contact</label><br></br>
                <input class="input" type="text" 
                
                value={number}
                onChange={handleNumberChange}
                required></input>
            </div> */}
                <div className="group">
                  <input type="submit" className="button" value="Sign Up" />
                </div>
               
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Signed in?</label>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vlogin;
