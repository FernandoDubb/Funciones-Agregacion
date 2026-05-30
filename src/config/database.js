const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'productsdb',
    'root',
    'Barcelona21..',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;