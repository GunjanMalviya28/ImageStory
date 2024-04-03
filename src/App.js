

import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setFirst } from "./features/userSlice";
import Nav from "./components/Nav";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();
  const { name, email, first } = useSelector((state) => state.user);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    dispatch(setFirst(true));
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const validateEmail = (email) => {
    // Basic email validation, you can improve it with a more comprehensive regex if needed
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    dispatch(setEmail(inputEmail));
    if (inputEmail && !validateEmail(inputEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      {first ? (
        <Nav name={name} />
      ) : (
        <>

          <div className="Main-form">

              <div className="form-left">
                <img className="pic" src="https://certifyid.com/wp-content/uploads/2019/11/pki.jpg"/>
               
                <div className="design">
                <FaCircle/>
                <h1>Design with us</h1>
                <p>To change the opacity of an image, you need to use the opacity property. The opacity property takes a value between 0 and 1. For example, the following code changes the opacity of an image </p>
                </div>
           </div>
            
             <div className="form-right">
                
           

            <div className="form-right-top">
            <span className="form-header">Don't have an account?<a className="Link-sign" href="/">Sign Up</a></span> 
              <h3 className="signin">Sign in</h3>
              <button className="google" ><FcGoogle /> Continue with Google</button><br/>
              <button  className="twitter"><FaTwitter /> Continue with Twitter</button>

              <div className="line-00">
                <div className="line-11" ></div>
                <div className="or">OR</div>
                <div className="line-12"></div>
              </div>
            </div>

            <div className="form-right-bottom">
            <form action="" onSubmit={handleSubmit} className="form-form">
             <div className="div-2">

                <div className="div-Name">
                  <label htmlFor="name" className="Name-1">  User name  </label>
                  <input className="Input-1"  type="text" name="name" id="name" autoComplete="off" value={name}  onChange={(e) => dispatch(setName(e.target.value))}  placeholder=" "  />
                 </div>
               
                <div className="div-Email">
                  <label htmlFor="email" className="Email-1">Email  </label>
                  <input className="Input-2"  type="text"  name="email"  id="email"  autoComplete="off"  value={email}  onChange={handleEmailChange}  placeholder=" "  />  {emailError && <p className="error-message">{emailError}</p>}
                </div>
              </div>

              <button type="submit"  className={`bg-${!name || !email || emailError ? "#808080" : "black" } text-${  !name || !email || emailError ? "white" : "white"  } button-from`} >  Login </button>  

            </form>

          <span className="form-footer">Don't have an account? <a className="Link-sign" href="/"> Sign Up</a></span>

            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;


