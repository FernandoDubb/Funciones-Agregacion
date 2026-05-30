const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {

    partNumber: {
        type: DataTypes.STRING,
        primaryKey: true  
    },

    value: {
        type: DataTypes.FLOAT
    },

    valueCurrency: {
        type: DataTypes.STRING
    },

    productType: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'product_v6',
    timestamps: false
});

module.exports = Product;