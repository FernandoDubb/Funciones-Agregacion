const Product = require('../models/Product');
const { fn, col } = require('sequelize');

exports.countProducts = async (req, res) => {
    try {
        const total = await Product.count();
        res.json({ total });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.totalValue = async (req, res) => {
    try {
        const total = await Product.findAll({
            attributes: [
                [fn('SUM', col('value')), 'total']
            ]
        });
        res.json(total);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.averageValue = async (req, res) => {
    try {
        const average = await Product.findAll({
            attributes: [
                [fn('AVG', col('value')), 'promedio']
            ]
        });
        res.json(average);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.maxValue = async (req, res) => {
    try {
        const product = await Product.findOne({
            order: [['value', 'DESC']]
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};