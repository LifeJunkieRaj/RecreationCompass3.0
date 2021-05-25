import React, {useState} from 'react'
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "../css/login.css"
import { NavLink } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import "../css/login.css";
import Footer from '../Components/Footer';

export default function Loginpage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login handler launched!");
    console.log(credential);
    console.log(password);
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };


  const loginWithDemo=()=>{

    console.log("login demo handler launched!");
    const username="demo@user.io";
    const pass="password";
    setErrors([]);
    return dispatch(sessionActions.login({ credential:username, password:pass }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }
 
    return (
      <>
       <NavBar pageName="login"/>
       <div className="w-100 mx-auto bar-divider"></div>
        <div className="login-background-container">
        
        <div>
           
          <div className="errorContainer text-danger  mx-auto m-3 w-25 ">
          <ul >
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
                <div className=" login-form-wrapper d-flex justify-content-center align-items-center">
                
            <form onSubmit={handleSubmit} className="login-form border p-3 border-pill border-success" >
                          <h1 className="text-center m-3">Login</h1>
  <div className="form-group m-1">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={e=>(setCredential(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group m-1">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={e=>(setPassword(e.target.value))}className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
<div className="form-group">
        Do not have a account yet?<NavLink to="/signup">Signup</NavLink>  </div>
  <input type="submit" value="Submit" className="btn btn-warning m-1"></input>
  <input onClick={loginWithDemo} type="button" value="Login with demo user" className="btn btn-warning m-1" />
        </form>
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}
