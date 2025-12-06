const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // fichier créé automatiquement
    logging: false
});

module.exports = sequelize;
