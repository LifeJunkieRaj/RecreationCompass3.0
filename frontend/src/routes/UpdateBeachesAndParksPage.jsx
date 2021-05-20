import React from 'react'
import UpdateBeachesAndParks from '../Components/UpdateBeachesAndParks';
import NavBar from '../Components/NavBar';
import "../css/updates.css";
import * as sessionActions from "../store/session";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from '../Components/Footer';

const UpdateBeachesAndParksPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    if(!sessionUser) return <Redirect to="/" />;
    return (
        <>
         <NavBar pageName="loggedinpage"></NavBar>
        <div className="updates-background-container">
        <div className="container">
           
            <h1 className="text-center text-white">Update Beach and/or Park</h1>
            <UpdateBeachesAndParks />
        </div>
        </div>
        <Footer />
        </>
    )
}

export default UpdateBeachesAndParksPage
