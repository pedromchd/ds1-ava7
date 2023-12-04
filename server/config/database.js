const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ds1_ava7', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
