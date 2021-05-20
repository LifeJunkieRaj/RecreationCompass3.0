import React, { useState } from 'react'
import { useLocation, useParams, useHistory } from "react-router-dom";
import RecreationCompass from '../apis/RecreationCompass';

function AddReviews() {
    const { id } = useParams();
    const location = useLocation()
    const history = useHistory()
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating")

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        try {
            const response = await RecreationCompass.post(`/${id}/addReview`, {
                name, 
                review: reviewText, 
                rating,
            });
            history.push("/")
            history.push(location.pathname)
        } catch (err) {
            console.log(err)
        }
    };
    
    return (
        <div className="nb-2 w-75 mx-auto">
            <form action="">
                <div className="">
                    <div className="form-group ">
                        <label htmlFor="name">Name</label>
                        <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name" placeholder="name" type="text" className="form-control"/>                        
                    </div>
                        <div className="form-group ">
                            <label htmlFor="rating">Rating</label>
                            <div className="w-100">
                            <select 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            id="rating" className="custom-select w-100"
                        >
                                <option disabled>Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            </div>
                           
                        </div>
                </div>
                <div className="form-group mb-1">
                    <label htmlFor="Review">Review</label>
                    <textarea 
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    id="Review" className="form-control"></textarea>
                </div>
                <div className="d-flex justify-content-end">
                <button type="submit" onClick={handleSubmitReview} className="btn btn-secondary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddReviews
