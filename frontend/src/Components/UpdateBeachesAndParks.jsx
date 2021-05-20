import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import RecreationCompass from "../apis/RecreationCompass";

function UpdateBeachesAndParks(props) {
    const {id} = useParams();
    const history = useHistory()  
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [if_beach, setIf_Beach] = useState("")
    const [if_park, setIf_Park] = useState("")  

    useEffect(() => {
        const fetchData = async() => {
            const response = await RecreationCompass.get(`/${id}`)
            console.log(response.data)
            setName(response.data.name)
            setLocation(response.data.location)
            setIf_Beach(response.data.ifBeach)
            setIf_Park(response.data.ifPark)
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedBeachesAndParks = await RecreationCompass.put(`/${id}`, {
            name,
            location,
            if_beach,
            if_park,
        })
        history.push("/baps")
    }

    return (
        <div>
          <form action="" className="d-flex flex-wrap w-75 mx-auto">
            <div className="w-50 p-1">
              <div >
                              <div className="form-group text-white">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
            </div>

            <div className="form-group text-white">
                <label htmlFor="location">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
            </div>
            </div>
            </div>
            <div className="w-50 p-1 mb-3 ">
            <div className="form-group text-white w-100">
                <label htmlFor="if_beach">Is it a Beach?</label>
                {/* <input id="if_beach" className="form-control" type={"text"} /> */}
                <select  value={if_beach} onChange={e => setIf_Beach(e.target.value)} className="custom-select w-100 mb-3">
                            <option disabled>Is it a beach?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                </select>
            </div>
            <div className="form-group text-white w-100">
                <label htmlFor="if_park">Is it a Park</label>
                {/* <input id="if_park" className="form-control" type={"text"} /> */}
                <select value={if_park} onChange={e => setIf_Park(e.target.value)} className="custom-select w-100">
                            <option disabled>Is it a park?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                </select>
            </div>
            </div>
            <div className="d-flex justify-content-end w-100">
            <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
            </div>
            
          </form>  
        </div>
    )
}

export default UpdateBeachesAndParks
