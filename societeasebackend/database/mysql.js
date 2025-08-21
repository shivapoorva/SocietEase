const { Sequelize } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('societ_ease', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL database');
  })
  .catch(err => {
    console.error('Unable to connect to MySQL database:', err);
  });

module.exports = sequelize;
