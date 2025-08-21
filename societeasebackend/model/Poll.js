const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Committee_member = require('./Committee_member');


// Define User model
const Poll = sequelize.define('Poll', {
  // Define model attributes
  committee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Committee_member, 
        key: 'id' 
      }
  },
  Questions: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{tableName: 'Poll', timestamps: false

});
Poll.belongsTo(Committee_member, { foreignKey: 'committee_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Poll;
