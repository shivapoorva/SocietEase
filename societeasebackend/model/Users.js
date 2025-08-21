const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
 const member = require('./Member');

// Define User model
const Users = sequelize.define('users', {
  // Define model attributes
  member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: member, 
        key: 'id' 
      }
  },
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Validated: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
},{tableName: 'users', timestamps: false

});
Users.belongsTo(member, { foreignKey: 'member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Users;
