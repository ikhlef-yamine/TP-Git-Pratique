const sequelize = require('../config/database');
const Product = require('./Product');
const Category = require('./Category');

// Relations
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = { sequelize, Product, Category };
