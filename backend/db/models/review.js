'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    beaches_and_parks_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.BeachesAndPark,{foreignKey:{
      name:'beaches_and_parks_id'
      
    }});
  };
  return Review;
};