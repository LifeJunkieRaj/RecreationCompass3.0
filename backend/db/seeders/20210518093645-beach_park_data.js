'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


      return queryInterface.bulkInsert('BeachesAndParks', [{
        name: 'beach1',
        location: 'testLocation',
        ifBeach: true,
        ifPark:false
      },{
        name: 'park1',
        location: 'testLocation',
        ifBeach: false,
        ifPark:true
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
