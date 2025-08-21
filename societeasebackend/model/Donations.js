const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Member = require('./Member');


// Define User model
const Donations = sequelize.define('Donations', {
  // Define model attributes
  Member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model:Member, 
        key: 'id' 
      }
  },
  payment_method : {
    type: DataTypes.ENUM('Credit Card', 'Debit Card', 'PayPal', 'Cash','Cheque'),
    allowNull: false,
  },
  Purpose : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Amount : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  }
  
,{tableName: 'Donations', timestamps: false

});
Donations.belongsTo(Member, { foreignKey: 'Member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Donations;