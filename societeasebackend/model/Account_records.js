const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Member = require('./Member');


// Define User model
const Account_records = sequelize.define('Account_records', {
  // Define model attributes
  member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Member, 
        key: 'id' 
      }
  },
  payment_method : {
    type: DataTypes.ENUM('Credit Card', 'Debit Card', 'PayPal', 'Cash'),
    allowNull: false,
  },
  Amount : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Date:{
    type:DataTypes.DATE,
    allowNull: true,
  },
  Description:{
    type: DataTypes.STRING,
    allowNull: false,
  }
  }
  
,{tableName: 'Account_records', timestamps: false

});
Account_records.belongsTo(Member, { foreignKey: 'member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Account_records;