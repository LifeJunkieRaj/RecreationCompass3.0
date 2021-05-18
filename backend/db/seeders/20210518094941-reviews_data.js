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

      return queryInterface.bulkInsert('Reviews', [{
        name: 'Review 1',
        beaches_and_parks_id:1,
        review:'great beach',
        rating: 4
      },
    {
        name: 'Review 2',
        beaches_and_parks_id:1,
        review:'awesome beach',
        rating: 5
      },{
        name: 'Review 3',
        beaches_and_parks_id:2,
        review:'great park',
        rating: 3
      },{
        name: 'Review 4',
        beaches_and_parks_id:2,
        review:'awesome park ',
        rating: 3
      },
      {
        name: 'Review 5',
        beaches_and_parks_id:2,
        review:'Too much crowd',
        rating: 2
      }],
       {});
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
