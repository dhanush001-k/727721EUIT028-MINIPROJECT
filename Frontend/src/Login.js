import React, { useState,useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
import './login.css';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);






  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('USER');
  // const [isSignUpMode, setIsSignUpMode] = useState(false);


  const[apiError,setApiError] = useState('');










  const[user,setUser]=useState({});
  function handleCallbackResponse(response){
    console.log("JWT ID token: "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    history.push("/Home");
  }
useEffect(() => {
  /* global google*/
    google.accounts.id.initialize({
      client_id:"1084230849540-gcp78ehjpogivqa2oupq1daa9ci5j9ct.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
   
  });







  // const toggleForm = () => {
  //   setIsSignIn(!isSignIn);
  // };



  // const [fname, setFName] = useState('');
  // const [lname, setLName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [number, setNumber] = useState('');
  // const[apiError,setApiError] = useState('');


  // const handleFNameChange = (event) => {
  //   setFName(event.target.value);
  // };
  
  // const handleLNameChange = (event) => {
  //   setLName(event.target.value);
  // };
  
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };
  
  // const handleNumberChange = (event) => {
  //   setNumber(event.target.value);
  // };

/*new*/
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // validateEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    // validatePassword(passwordValue);
  };



  const history=useHistory();




  const handleLogInSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all the required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
        email,
        password,
      });

      if (response.status === 200) {
        setErrorMessage('');
        history.push('/Home'); // Redirect to the home page upon successful login
      } else {
        // setErrorMessage('Invalid credentials. Please try again.');
        setApiError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // setErrorMessage('Login failed. Please try again.');
      setApiError('Invalid email or password');
    }
  };








  //  const handleLogInSubmit = (e) => { (Chandru **)
  //     e.preventDefault();
  //     // Perform sign-in form validation
  //     if (email && password) {
  //       // Handle sign-in form submission or redirect to the next page
  //       axios.post('http://127.0.0.1:8080/Login',{
  //         email:email,
  //         password:password,
  //       })
  //       .then((response)=>{
  //         console.log('Response from backend:',response.data);
  //         history.push("/Home");
  //       })
  //       .catch((error)=>{
  //         console.error('Error:',error);
  //         setApiError('Invalid email or password');
  //       });
        
  //     }
    
  //    else {
  //     // Show an error message or perform other actions for invalid form submission
  //     console.log('Please fill in all required fields');
  //   }
  // };



  // const handleSignInSubmit = (e) => { (Chandru)
    // e.preventDefault();
    // history.push("/Home")
    // Perform sign-in form validation
    // if (email && password) {
    //   // Handle sign-in form submission or redirect to the next page
    //   axios.post('http://127.0.0.1:8080/Login',{
    //     email:email,
    //     password:password,
    //   })
    //   .then((response)=>{
    //     console.log('Response from backend:',response.data);
    //     history.push("/Home");
    //   })
    //   .catch((error)=>{
    //     console.error('Error:',error);
    //     setApiError('Invalid email or password');
    //   });
      
    // }
    // const handleLogInSubmit = (e) => { (Chandru)
    //   e.preventDefault();
    //   // Perform sign-in form validation
    //   if (email && password) {
    //     // Handle sign-in form submission or redirect to the next page
    //     axios.post('http://127.0.0.1:8080/Login',{
    //       email:email,
    //       password:password,
    //     })
    //     .then((response)=>{
    //       console.log('Response from backend:',response.data);
    //       history.push("/Home");
    //     })
    //     .catch((error)=>{
    //       console.error('Error:',error);
    //       setApiError('Invalid email or password');
    //     });
        
    //   }
    
    //  else {
    //   // Show an error message or perform other actions for invalid form submission
    //   console.log('Please fill in all required fields');
    // }
  // };



  // const handleSignUpSubmit = (e) => {  (Chandru.)
  //   e.preventDefault();
  //   const data={
  //     firstName:fname,
  //     lastName:lname,
  //     email:email,
  //     password:password,
  //     phoneNumber:number
  //   }
  //   axios.post('http://127.0.0.1:8080/add', data);
  //   // Perform sign-up form validation
  //   setIsSignIn(true);
  //   // history.push('/Login');
  // };


  // const handleFormSubmit = () => {
  //   window.location.reload(); // Reload the page
  // };






  const handleRegister = async (e) => {
    e.preventDefault();
    const isEmailValid = email && !emailError;
    const isPasswordValid = password && !passwordError;
  
    if (isEmailValid && isPasswordValid) {
      const registrationData = {
        name,
        email,
        password,
        role,
      };
  
      try {
        const response = await fetch('http://localhost:8082/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });
  
        if (response.ok) {
          setErrorMessage('');
          history.push('/Login'); // Redirect to the home page upon successful registration
          window.location.reload(); // Reload the page after redirection
        } else {
          setErrorMessage('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setErrorMessage('Registration failed. Please try again.');
      }
    } else {
      setErrorMessage('Please fill in all the required fields');
    }
  };
  









  return (
    <div className="ubg">
      <div className="ulogin-wrap">
        <div className="ulogin-html">
          <h1 id="ul">User Login</h1>
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
              <form onSubmit={handleLogInSubmit}>
                <div className="usign-in-htm">
                  <div className="ugroup">
                    <label htmlFor="user" className="ulabel">
                      Email
                    </label>
                    <input
                      id="user"
                      type="email"
                      className="uinput"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
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
                    {apiError &&(
                      <Typography style={{fontSize:"22px"}}color="error" align="center">
                      {apiError}
                      </Typography>
                    )}
                    <label htmlFor="check" id="kmsi">
                      <span className="uicon"> </span> Keep me Signed in
                    </label>
                    <a id="ua" href="#forgot">
                      Forgot Password?
                    </a>
                  </div>
                  {/* <Link to="/Home"> */}
                    <div className="ugroup">
                      <input
                        type="submit"
                        className="ubutton"
                        value="Sign In"
                        required
                      />
                    </div>
                  {/* </Link> */}
                  <p className="uor">or</p>
                  <div className="usgoo">
                    {/* <button className="uimage-button">
                      <img src="https://static.vecteezy.com/system/resources/previews/022/484/503/original/google-lens-icon-logo-symbol-free-png.png" alt="Google Logo" />
                      <span>Sign in with Google</span>
                    </button> */}
                    <div id='signInDiv' ></div>
                  </div>
                  <div className="uhr"></div>
                  <div className="ufoot-lnk"></div>
                  <p>Don't have an account?</p>
                  <div className="ufoot-lnk">
                    <label htmlFor="tab-2">
                      <a>Create new account</a>
                    </label>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <div className="usign-up-htm">
                  <div className="ugroup">
                    <label htmlFor="user" className="ulabel">
                      Name
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="uinput"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  {/* <div className="ugroup">
                    <label htmlFor="user" className="ulabel">
                      Lastname
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="uinput"
                      value={lname}
                      onChange={handleLNameChange}
                      required
                    />
                  </div> */}
                  <div className="ugroup">
                    <label className="ulabel">Email Address</label>
                    <input
                      id="pass"
                      type="email"
                      className="uinput"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
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
                  {/* <div className="ugroup">
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
                  </div> */}
                  <div className="ugroup">
                  
                    <input type="submit" className="ubutton" value="Sign Up"    />
                   
                  </div>
                  <div className="ufoot-lnk">
                    <label htmlFor="tab-1">Already a Member</label>
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























































// import React, { useState } from 'react';
// import {Link} from "react-router-dom"
// import './login.css'
// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };
 
//   const handleSignInSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in form submission
//   };
 
//   const handleSignUpSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up form submission
//   };

//   const[fname,setfName]=useState('');
//   const[lname,setlName]=useState('');
  
//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const[number,setNumber]=useState('');
 


//   const handlefNameChange=(event) =>
//   {
//       setfName(event.target.value);
//   };
  
//   const handlelNameChange=(event) =>
//   {
//       setlName(event.target.value);
//   };

 

// const handleEmailChange=(event)=>
// {
//   setEmail(event.target.value);
// };

// const handlePasswordChange=(event)=>
// {
//  setPassword(event.target.value);
// };

// const handleNumberChange=(event)=>
// {
//  setNumber(event.target.value);
// };





//   return (
//     <div className='ubg'>
//       {/* <Link to="/">
//        <div className='ubk'>
//             <button className='ubk-button'><img src="https://cdn-icons-png.flaticon.com/128/7915/7915208.png">
//                 </img><span>Back</span></button>
//                 </div>
//                 </Link> */}
//       <div className="ulogin-wrap">
        
//       <div className="ulogin-html">
//         <h1 id="ul">User Login</h1>
//         <input
//           id="tab-1"
//           type="radio"
//           name="tab"
//           className="usign-in"
//           checked={isSignIn}
//           onChange={() => setIsSignIn(true)}
//         />
//         <label htmlFor="tab-1" className="utab">
//           Sign In
//         </label>
//         <input
//           id="tab-2"
//           type="radio"
//           name="tab"
//           className="usign-up"
//           checked={!isSignIn}
//           onChange={() => setIsSignIn(false)}
//         />
//         <label htmlFor="tab-2" className="utab">
//           Sign Up
//         </label>
//         <div className="ulogin-form">
//           {isSignIn ? (
//             <form onSubmit={handleSignInSubmit}>
//               <div className="usign-in-htm">
//                 <div className="ugroup">
//                   <label htmlFor="user" className="ulabel">
//                      Email
//                   </label>
//                   <input id="user" type="email" className="uinput" value={email}
//                  onChange={handleEmailChange} required/>
//                 </div>
//                 <div className="ugroup">
//                   <label htmlFor="pass" className="ulabel">
//                     Password
//                   </label>
//                   <input
//                     id="pass"
//                     type="password"
//                     className="uinput"
//                     data-type="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     required
//                   />
//                 </div>
//                 <div className="ugroup">
//                   <input
//                     id="check"
//                     type="checkbox"
//                     className="ucheck"
//                     defaultChecked
//                   />
//                   <label htmlFor="check" id="kmsi">
//                     <span className="uicon">   </span> Keep me Signed in  
//                   </label>
//                   <a id="ua" href="#forgot">Forgot Password?</a>
//                 </div>
//                 <Link to="/Home">
//                 <div className="ugroup">
//                   <input type="submit" className="ubutton" value="Sign In" required/>
//                 </div>
//                 </Link>
//                 <p className='uor'>or</p>
//             <div className='usgoo'>
//             <button className='uimage-button'><img src="https://static.vecteezy.com/system/resources/previews/022/484/503/original/google-lens-icon-logo-symbol-free-png.png">
//                 </img><span>Sign in with google</span></button>
//                 </div>
//                 <div className="uhr"></div>
//                 <div className="ufoot-lnk">
//                 </div>
//                 <p>Don't have an account?</p>
//                 <div className="ufoot-lnk">
//                   <label htmlFor="tab-2"><a href="#">create new account</a></label>
//                 </div>
//               </div>
//             </form>
//           ) : (
//             <form onSubmit={handleSignUpSubmit}>
//               <div className="usign-up-htm">
//                 <div className="ugroup">
//                   <label htmlFor="user" className="ulabel">
//                     Firstname
//                   </label>
//                   <input id="user" type="text" className="uinput" value={fname} 
//                  onChange={handlefNameChange} required />
//                 </div>
//                 <div className="ugroup">
//                   <label htmlFor="user" className="ulabel">
//                     Lastname
//                   </label>
//                   <input id="user" type="text" className="uinput" value={lname} 
//                  onChange={handlelNameChange} required />
//                 </div>
//                 <div className="ugroup">
//                   <label  className="ulabel">
//                     Email Address
//                   </label>
//                   <input id="pass" type="email" className="uinput"  value={email}
//                  onChange={handleEmailChange} required/>
//                 </div>
//                 <div className="ugroup">
//                   <label htmlFor="pass" className="ulabel">
//                     Password
//                   </label>
//                   <input
//                     id="pass"
//                     type="password"
//                     className="uinput"
//                     data-type="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     required
//                   />
//                 </div>
//                 <div className="ugroup">
//                   <label htmlFor="pass" className="ulabel">
//                     ContactNumber
//                   </label>
//                   <input
//                     id="pass"
//                     type="text"
//                     className="uinput"
//                     data-type="text"
//                     value={number}
//                     onChange={handleNumberChange}
//                     required
//                   />
//                 </div>
                
//                 <div className="ugroup">
//                   <input type="submit" className="ubutton" value="Sign Up" />
//                 </div>
               
//                 <div className="ufoot-lnk">
//                   <label htmlFor="tab-1">Already a Member</label>
//                 </div>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;
