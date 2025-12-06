const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// GET all products
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// GET one product
router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
});

// POST create product
router.post('/', async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

// PUT update product
router.put('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.json(product);
});

// DELETE
router.delete('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.json({ message: "Produit supprimé" });
});

module.exports = router;


