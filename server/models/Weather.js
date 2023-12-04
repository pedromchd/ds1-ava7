const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Weather = sequelize.define(
    'Weather',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cidade: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        temperatura: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false,
        },
        sensacao: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false,
        },
        umidade: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false,
        },
        codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Weather;
