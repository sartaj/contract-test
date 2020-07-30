const Sequelize = require('sequelize');
const { times } = require('ramda')
const { createDessert } = require('demo-domain/entities/dessert/mocks')

const db = new Sequelize('dessert', null, null, {
  dialect: 'sqlite',
  storage: './desserts.sqlite'
});

const desserts = db.define('desserts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  hotelName: {
    type: Sequelize.STRING
  },
  arrivalDate: {
    type: Sequelize.STRING,
  },
  departureDate: {
    type: Sequelize.STRING,
  }
});

db.sync({ force: true }).then(()=> {
  times(() => {
    desserts
      .create(createDessert())
      .then(result => result.dataValues.id)
      .catch(e => { console.error('mock data population failed') })
  }, 30);
});

module.exports = { 
  desserts
}