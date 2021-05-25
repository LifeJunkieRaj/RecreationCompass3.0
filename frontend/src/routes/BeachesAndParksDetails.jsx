import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { BeachesAndParksContext } from "../ContextAPI/BeachesAndParksContext";
import RecreationCompass from "../apis/RecreationCompass";
import StarRating from '../Components/StarRating';
import Reviews from '../Components/Reviews';
import AddReviews from '../Components/AddReviews';
import NavBar from '../Components/NavBar';
import "../css/details.css";
import * as sessionActions from "../store/session";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from '../Components/Footer';



const BeachesAndParksDetails = () => {
    const {id} = useParams()
    const {selectedBeachesAndParks, setSelectedBeachesAndParks} = useContext(BeachesAndParksContext)
    const sessionUser = useSelector((state) => state.session.user);
    
    useEffect(() => {
        
        const fetchData = async () => {
            
            try{
                const response = await RecreationCompass.get(`/${id}`)
                
                setSelectedBeachesAndParks(response.data)
                console.log(selectedBeachesAndParks)        
            
            }catch(err){
                console.log(err)
            }
           }
        fetchData()
    }, [])


    return (
        <>
         <NavBar pageName="loggedinpage" />
         <div className="w-100 mx-auto bar-divider"></div>
        <div className="details-background-container">
        {sessionUser? ( <div className="container">
           
            {selectedBeachesAndParks && (
            <div >
            <h1 className="text-center display-1">{selectedBeachesAndParks.name}</h1>
            <div className="text-center">
                <StarRating rating={selectedBeachesAndParks.average_rating}/>
                <span className="text-warning ml-1">{selectedBeachesAndParks.count ? `(${selectedBeachesAndParks.count} reviews)` : "(0)"}</span>
            </div>
            <div className="mt-3">
                <Reviews reviews={selectedBeachesAndParks.Reviews} />
                
            </div>
                <AddReviews />
            </div>        
            )}
        </div>): <Redirect to="/" />}
       
        </div>
        <Footer />
        </>
    )
}

export default BeachesAndParksDetails
