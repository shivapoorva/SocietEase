const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Member = require('./Member');

// Define User model
const Committee_member = sequelize.define('Committee_member', {
  // Define model attributes
  Member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Member, 
        key: 'id' 
      }
  },
  Duration_Period : {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
},{tableName: 'committee_member', timestamps: false

});
Committee_member.belongsTo(Member, { foreignKey: 'Member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Committee_member;
