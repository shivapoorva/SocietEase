const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Committee_member = require('./Committee_member');
const Member = require('./Member');
// Define User model
const notices = sequelize.define('notices', {
  // Define model attributes
  member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Member, 
        key: 'id' 
      }
  },
  title : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at:{
    type:DataTypes.DATE,
    allowNull: false,
  },
  updated_at:{
    type:DataTypes.DATE,
    allowNull: false,
  },
  priority:{
     type:DataTypes.ENUM('high', 'medium', 'low'),
     allowNull: false,
  },
  valid_till:{
    type:DataTypes.DATE,
    allowNull: true,
  }
},{tableName: 'notices', timestamps: false

});
notices.belongsTo(Member, { foreignKey: 'member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = notices ;
