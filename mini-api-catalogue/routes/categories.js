const express = require('express');
const router = express.Router();
const categories = require('../data/categories.json');

// GET all categories
router.get('/', (req, res) => {
  res.status(200).json(categories);
});

// GET category by id
router.get('/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    // On utilise c.nom ici car c'est le nom de la propriété dans votre JSON
    const category = categories.find(c => c.id === categoryId); 

    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).send('Catégorie non trouvée');
    }
});

module.exports = router;


