import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './login.css'
const Login = () => {
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

  const[fname,setfName]=useState('');
  const[lname,setlName]=useState('');
  
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[number,setNumber]=useState('');
 


  const handlefNameChange=(event) =>
  {
      setfName(event.target.value);
  };
  
  const handlelNameChange=(event) =>
  {
      setlName(event.target.value);
  };

 

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





  return (
    <div className='ubg'>
      {/* <Link to="/">
       <div className='ubk'>
            <button className='ubk-button'><img src="https://cdn-icons-png.flaticon.com/128/7915/7915208.png">
                </img><span>Back</span></button>
                </div>
                </Link> */}
      <div className="ulogin-wrap">
        
      <div className="ulogin-html">
        <h1 id="ul">User Form</h1>
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="usign-in"
          checked={isSignIn}
          onChange={() => setIsSignIn(true)}
        />
        <label htmlFor="tab-1" className="utab">
          Sign In
        </label>
        <input
          id="tab-2"
          type="radio"
          name="tab"
          className="usign-up"
          checked={!isSignIn}
          onChange={() => setIsSignIn(false)}
        />
        <label htmlFor="tab-2" className="utab">
          Sign Up
        </label>
        <div className="ulogin-form">
          {isSignIn ? (
            <form onSubmit={handleSignInSubmit}>
              <div className="usign-in-htm">
                <div className="ugroup">
                  <label htmlFor="user" className="ulabel">
                     Email
                  </label>
                  <input id="user" type="email" className="uinput" value={email}
                 onChange={handleEmailChange} required/>
                </div>
                <div className="ugroup">
                  <label htmlFor="pass" className="ulabel">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="uinput"
                    data-type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="ugroup">
                  <input
                    id="check"
                    type="checkbox"
                    className="ucheck"
                    defaultChecked
                  />
                  <label htmlFor="check">
                    <span className="uicon"> </span>Keep me Signed in   
                  </label>
                  <a id="ua" href="#forgot">Forgot Password?</a>
                </div>
                <Link to="/Home">
                <div className="ugroup">
                  <input type="submit" className="ubutton" value="Sign In" required/>
                </div>
                </Link>
                <p className='uor'>or</p>
            <div className='usgoo'>
            <button className='uimage-button'><img src="https://static.vecteezy.com/system/resources/previews/022/484/503/original/google-lens-icon-logo-symbol-free-png.png">
                </img><span>Sign in with google</span></button>
                </div>
                <div className="uhr"></div>
                <div className="ufoot-lnk">
                </div>
                <p>Don't have an account?</p>
                <div className="ufoot-lnk">
                  <label htmlFor="tab-2"><a href="#">create new account</a></label>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <div className="usign-up-htm">
                <div className="ugroup">
                  <label htmlFor="user" className="ulabel">
                    Firstname
                  </label>
                  <input id="user" type="text" className="uinput" value={fname} 
                 onChange={handlefNameChange} required />
                </div>
                <div className="ugroup">
                  <label htmlFor="user" className="ulabel">
                    Lastname
                  </label>
                  <input id="user" type="text" className="uinput" value={lname} 
                 onChange={handlelNameChange} required />
                </div>
                <div className="ugroup">
                  <label  className="ulabel">
                    Email Address
                  </label>
                  <input id="pass" type="email" className="uinput"  value={email}
                 onChange={handleEmailChange} required/>
                </div>
                <div className="ugroup">
                  <label htmlFor="pass" className="ulabel">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="uinput"
                    data-type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="ugroup">
                  <label htmlFor="pass" className="ulabel">
                    ContactNumber
                  </label>
                  <input
                    id="pass"
                    type="text"
                    className="uinput"
                    data-type="text"
                    value={number}
                    onChange={handleNumberChange}
                    required
                  />
                </div>
                
                <div className="ugroup">
                  <input type="submit" className="ubutton" value="Sign Up" />
                </div>
               
                <div className="ufoot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
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

export default Login;

