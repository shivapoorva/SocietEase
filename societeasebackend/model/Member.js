const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Society = require('./Society');


// Define User model
const Member = sequelize.define('member', {
  // Define model attributes
  Society_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Society, 
        key: 'id' 
      }
  },
  Salutations :
  {
    type: DataTypes.STRING,
    allowNull:false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOB :{
    type: DataTypes.DATE,
    allowNull: false,
  },
  Owner:{
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  Flat_Number :{
    type: DataTypes.STRING,
    allowNull: false,
  },

  Email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Validated_by:{
    type: DataTypes.INTEGER,
    allowNull: true,
  }


},{tableName: 'member', timestamps: false

});
Member.belongsTo(Society, { foreignKey: 'Society_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Member;
