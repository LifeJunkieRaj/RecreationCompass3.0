'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beachandpark = sequelize.define('BeachesAndPark', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    ifBeach: DataTypes.BOOLEAN,
    ifPark: DataTypes.BOOLEAN
  }, {});
  Beachandpark.associate = function(models) {
    // associations can be defined here
    Beachandpark.hasMany(models.Review, {foreignKey:{
      name:'beaches_and_parks_id'
      
    }});
  };
  return Beachandpark;
};