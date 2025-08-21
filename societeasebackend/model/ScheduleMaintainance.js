const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql'); // Import Sequelize instance
const Committee_member = require('./Committee_member');
const Member = require('./Member');
const Maintainance = require('./Maintainance');

// Define User model
const SchMaintainance = sequelize.define('scheduled_maintainance', {
    Maintainance_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Maintainance,
            key: 'id',
        },
    },
    Member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Member,
            key: 'id',
        },
    },
    Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Interest_Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    Maintainance_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    payment_method: {
        type: DataTypes.ENUM('Credit Card', 'Debit Card', 'PayPal', 'Cash'),
        allowNull: true,
    },
    payment_status: {
        type: DataTypes.ENUM('pending', 'completed', 'failed'),
        allowNull: true,
    },
}, { tableName: 'scheduled_maintainance', timestamps: false });

SchMaintainance.belongsTo(Maintainance, { foreignKey: 'Maintainance_id' });
SchMaintainance.belongsTo(Member, { foreignKey: 'Member_id' });

module.exports = SchMaintainance;
