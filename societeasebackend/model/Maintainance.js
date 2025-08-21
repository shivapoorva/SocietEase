const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Committee_member = require('./Committee_member');
const Member = require('./Member');

// Define User model
const Maintainance = sequelize.define('Maintainance', {
  // Define model attributes
  Committee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Committee_member, 
        key: 'id' 
      }
  },
  Member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model:Member, 
        key: 'id' 
      }
  },
  Sinking_Fund: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Repair_charges : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Municipal_Tax : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Water_Charges  : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Parking_Charges : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  NOC_Charges : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Service_Charges : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  N_A_Taxes : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Other_Charges : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Festival_fund : {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Total_Amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  Interest_percent: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
},{tableName: 'Maintainance', timestamps: false

});
Maintainance.belongsTo(Committee_member, { foreignKey: ' Committee_id' });
Maintainance.belongsTo(Member, { foreignKey: ' Member_id' });

// Create the table if it doesn't exist
//Society.sync();
module.exports = Maintainance;
