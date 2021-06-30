import axios from 'axios';

export default axios.create({

    baseURL:"https://rec-compass.herokuapp.com/api/baps"
    //baseURL: "http://localhost:3000/api/baps"
});