import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../store/session";
import NavBar from '../Components/NavBar';
import "../css/signup.css";
import Footer from '../Components/Footer';


export default function Signuppage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;


  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(sessionActions.signup({ email, username, password }))
      .catch(res => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });

    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <NavBar pageName="signup" />
    <div className="signup-background-container">
      <div>
        
        <div className="errorContainer text-danger border mx-auto m-3 w-25">
          <ul >
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div className=" login-form-wrapper d-flex justify-content-center align-items-center">

          <form onSubmit={handleSubmit} className="border p-3 border-pill border-success" >
            <h1 className="text-center m-3">Sign up</h1>
            <div className="form-group m-1">
              <label htmlFor="userName">Username</label>
              <input onChange={e => { setUsername(e.target.value) }} type="username" className="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Enter Username" />
              <small id="userNameHelp" className="form-text text-white">We'll never share your username with anyone else.</small>
            </div>
            <div className="form-group m-1">
              <label htmlFor="email">Email address</label>
              <input onChange={e => { setEmail(e.target.value) }} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group m-1">
              <label htmlFor="password">Password</label>
              <input onChange={e => { setPassword(e.target.value) }} type="password" className="form-control" id="password" placeholder="Password" />
            </div>

            <div className="form-group">
              Already have an account ?<NavLink to="/login">Login</NavLink>  </div>
            <button type="submit" className="btn btn-warning m-1">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
