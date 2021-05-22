import axios from 'axios';

export default axios.create({
    //http:localhost:3000/api/baps
    baseURL: "https://recreationcompass.herokuapp.com/api/baps"
});