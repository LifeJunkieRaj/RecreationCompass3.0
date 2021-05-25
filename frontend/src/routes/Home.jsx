import React from 'react'
import AddBeachAndOrPark from '../Components/AddBeachAndOrPark';
import BeachesAndParksList from '../Components/BeachesAndParksList';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import "../css/home.css";

import * as sessionActions from "../store/session";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from '../Components/Footer';

const Home = () => {
    const sessionUser = useSelector((state) => state.session.user);
    if(!sessionUser) return <Redirect to="/" />;
    return (
        <>
        <NavBar pageName="loggedinpage"/>
        <div className="w-100 mx-auto bar-divider"></div>
        <div className="home-background-container">
        <div  className="container  text-white" >
            
           <Header />
            <div className="d-flex ">
            
           <BeachesAndParksList  />
           <AddBeachAndOrPark />
        </div>
         
         
           </div>
           </div>
           <Footer />
           </>
    )
}

export default Home
