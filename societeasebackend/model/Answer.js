const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Poll = require('./Poll');


// Define User model
const Answer = sequelize.define('Answer', {
  // Define model attributes
  Poll_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Poll, 
        key: 'id' 
      }
  },
  Option_text : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Votes : {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  
},{tableName: 'Answer', timestamps: false

});
Answer.belongsTo(Poll, { foreignKey: 'Poll_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Answer;