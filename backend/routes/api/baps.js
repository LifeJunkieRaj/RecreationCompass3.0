const express= require('express');
const { BeachesAndPark } = require('../../db/models');
const { Review } = require('../../db/models');
const router = express.Router();
router.get("/", async (req, res)=>{
const beachesAndParksData=await BeachesAndPark.findAll();
const reviews= await Review.findAll();

for(let i=0; i<beachesAndParksData.length; i++){
    let id= beachesAndParksData[i].id;
    beachesAndParksData[i].dataValues.count=0;
    beachesAndParksData[i].dataValues.average=0;
    for (let j= 0; j<reviews.length; j++){
        if(id== reviews[j].beaches_and_parks_id){
            beachesAndParksData[i].dataValues.count+=1
            beachesAndParksData[i].dataValues.average+=reviews[j].rating;
        }
        
    }
    if(beachesAndParksData[i].dataValues.count>0){
        beachesAndParksData[i].dataValues.average/=beachesAndParksData[i].dataValues.count;
    }
    
}
console.log(beachesAndParksData)
    res.send(JSON.stringify(beachesAndParksData));
})

module.exports= router