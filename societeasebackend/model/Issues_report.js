const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Member = require('./Member');


// Define User model
const Issues_report = sequelize.define('Issues_report', {
  // Define model attributes
  Member_id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Member, 
        key: 'id' 
      }
  },
  Committee_comments : {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_date : {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Status:{
    type:DataTypes.ENUM('Solved','Unsolved','InProgress'),
    allowNull: true,
  },
  Description:{
    type: DataTypes.STRING,
    allowNull: false,
  }
  }
  
,{tableName: 'Issues_report', timestamps: false

});
Issues_report.belongsTo(Member, { foreignKey: 'Member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Issues_report;