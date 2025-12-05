const express = require('express');
const router = express.Router();
// Importation des données JSON (elles sont chargées en mémoire)
let products = require('../data/products.json'); 

// --- READ (GET) ---

// GET tous les produits : http://localhost:3000/api/products
router.get('/', (req, res) => {
  res.status(200).json(products);
});

// GET un produit par ID : http://localhost:3000/api/products/:id
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send('Produit non trouvé');
  }
});

// --- CREATE (POST) ---

// Créer un nouveau produit : POST http://localhost:3000/api/products
// Le corps de la requête doit être un objet JSON { name, categoryId, price }
router.post('/', (req, res) => {
  const newProduct = req.body;

  // Validation simple
  if (!newProduct.name || !newProduct.categoryId || !newProduct.price) {
    // Amélioration pour la partie 2: utiliser des codes HTTP corrects (400 Bad Request)
    return res.status(400).send('Données manquantes pour le produit.');
  }

  // Assigner un ID simple (le maximum actuel + 1)
  newProduct.id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  
  products.push(newProduct);
  
  // 201 Created est le bon code HTTP pour une création réussie
  res.status(201).json(newProduct);
});

// --- UPDATE (PUT) ---

// Mettre à jour un produit existant : PUT http://localhost:3000/api/products/:id
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedData = req.body;

    const index = products.findIndex(p => p.id === productId);

    if (index !== -1) {
        // Fusionner les données existantes avec les nouvelles données
        products[index] = { ...products[index], ...updatedData };
        res.status(200).json(products[index]);
    } else {
        res.status(404).send('Produit non trouvé pour mise à jour');
    }
});

// --- DELETE (DELETE) ---

// Supprimer un produit : DELETE http://localhost:3000/api/products/:id
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const initialLength = products.length;
    
    // Filtre pour garder tous les produits SAUF celui avec l'ID spécifié
    products = products.filter(p => p.id !== productId);

    if (products.length < initialLength) {
        // 204 No Content est souvent utilisé pour un DELETE réussi
        res.status(204).send(); 
    } else {
        res.status(404).send('Produit non trouvé pour suppression');
    }
});


module.exports = router;


