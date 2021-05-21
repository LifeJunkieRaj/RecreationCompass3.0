const express= require('express');
const { BeachesAndPark } = require('../../backend/db/models');
const { Review } = require('../../backend/db/models');
const router = express.Router();
const {Op}= require('sequelize');

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

router.get("/:id", async (req, res) => {
    let id = req.params.id;
    let beachesAndParksData = await BeachesAndPark.findAll({ 
        where: {
            id:{[Op.eq]:id}
        },
        include:{
            model:Review
        }
    })

    let data= beachesAndParksData[0].dataValues;
   
    const reviews= data.Reviews;
    data.count=reviews.length;
    data.average_rating=0;
    for (let j= 0; j<reviews.length; j++){
        data.average_rating+=reviews[j].rating;
    }
    if(data.count>0){
        data.average_rating/=data.count;
    }

    res.send(JSON.stringify(data));

})


router.post("/", async (req, res) => {
    console.log(req.body.name)

    const beachAndPark=await BeachesAndPark.create({
        name:req.body.name,
        location: req.body.location,
        ifBeach:req.body.if_beach,
        ifPark: req.body.if_park
    })
    console.log(beachAndPark.dataValues)
    res.send(JSON.stringify(beachAndPark.dataValues));
})
router.put("/:id", async (req, res) => {
    const data= await BeachesAndPark.findByPk(req.params.id);
    data.name= req.body.name;
    data.location= req.body.location;
    data.ifBeach= req.body.if_beach;
    data.ifPark= req.body.if_park;
    data.save();
    res.send(JSON.stringify(data.dataValues))
    
})
router.delete("/:id", async (req, res) => {
    let id= req.params.id;
    let beachesAndParksData = await BeachesAndPark.findAll({ 
        where: {
            id:{[Op.eq]:id}
        },
        include:{
            model:Review
        }
    })
    if(beachesAndParksData[0].Reviews.length>0){
        beachesAndParksData[0].Reviews.map(review =>{
            review.destroy();
        })
    }

    await beachesAndParksData[0].destroy();
    res.send(JSON.stringify({status:"success"}))
})

router.post("/:id/addReview", async (req, res) => {
  let id=req.params.id;
  let review= await Review.create({
      beaches_and_parks_id: id,
      name:req.body.name,
      review:req.body.review,
      rating:req.body.rating
  })  
  res.send(JSON.stringify(review.dataValues));
})



module.exports= router