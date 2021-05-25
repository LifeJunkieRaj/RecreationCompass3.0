import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import "../css/navbar.css"
import * as sessionActions from "../store/session";
import { useDispatch } from "react-redux";
export default function NavBar(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        // history.push("/")
      };


    if(props.pageName ==="login" || props.pageName==="signup" ){
        return(
            <>
            <div className="container nav d-flex ">
            <div>
                <NavLink className="btn btn-warning m-3" to="/">Home</NavLink>
            </div>
            

        </div>
        
        </>
        )
    }
    else if(props.pageName ==="loggedinpage"){
        return(
            <>
            <div className="container nav d-flex justify-content-between ">
            
           
            <div>
                <NavLink className="btn btn-warning m-3" to="/">Home</NavLink>
            </div>
            <div>
                <button onClick={logout}  className="btn btn-warning m-3" to="/">Logout</button>
            </div>
          

        </div>
        
        </>
        )
    }
    else{
        return (
            <>
            <div className="container nav d-flex justify-content-between">
                <div>
                    <NavLink className="btn btn-warning m-3" to="/">Home</NavLink>
                </div>
                <div className="navbar-logo-container-">
                    <h1 className="m-1" to="/">Recreation Compass</h1>
                </div>
                <div>
                    <NavLink className="btn btn-warning m-3" to="/login">Login</NavLink>
                    <NavLink className="btn btn-warning" to="/signup">SignUp</NavLink>
                </div>
               
            </div>
            
            </>
        )
    }
   
}
