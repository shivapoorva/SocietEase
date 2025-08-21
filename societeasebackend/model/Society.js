const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance

// Define User model
const Society = sequelize.define('society', {
  // Define model attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{tableName: 'society', timestamps: false

});

// Create the table if it doesn't exist
//Society.sync();
module.exports = Society;
