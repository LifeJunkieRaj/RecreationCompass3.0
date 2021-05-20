import React, { useState, useContext, useEffect } from 'react';
import RecreationCompass from "../apis/RecreationCompass";
import { BeachesAndParksContext } from "../ContextAPI/BeachesAndParksContext";
import "../css/addBeachesAndParks.css"
function AddBeachAndOrPark() {
    const {addBaps} = useContext(BeachesAndParksContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [if_beach, setIf_Beach] = useState(true)
    const [if_park, setIf_Park] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RecreationCompass.post("/", {
                name,
                location,
                if_beach,
                if_park,
            });
            console.log(response)
            addBaps(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log("if_beach", if_beach)
    },[if_beach])
    useEffect(() => {
        console.log("if_park", if_park)
    },[if_park])

    return (
        <div className="mb-4  addBeachesAndParksContainer">
            <form action="">
                <h3>Add a beach or park</h3>
                <div className="form">
                    <div className="mb-2" >
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="mb-2">
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location"/>
                    </div>
                    <div className="mb-1 addBeachesAndParks_selectContainer">
                        <select className="addBeachesAndParks_select"  value={if_beach} onChange={e => setIf_Beach(e.target.value)} >
                            <option disabled>Is it a beach?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className="mb-1 addBeachesAndParks_selectContainer">
                        <select className="addBeachesAndParks_select" value={if_park} onChange={e => setIf_Park(e.target.value)} >
                            <option disabled>Is it a park?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-warning">Add</button>
                </div>    
            </form>            
        </div>
    )
}

export default AddBeachAndOrPark
