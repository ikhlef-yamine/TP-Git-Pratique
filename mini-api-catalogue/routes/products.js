// routes/products.js (Exemple)

// ... autres imports et données
const products = require('../data/products.json'); 

// Route POST pour créer un nouveau produit
router.post('/', (req, res) => {
    // 1. Logique de validation et de création du produit (omise ici)
    const newProduct = req.body;
    newProduct.id = Date.now(); // Simulation d'un ID
    products.push(newProduct);
    
    // 2. CORRECTION : Utilisation du code 201 Created pour une création réussie
    res.status(201).send(newProduct); 
});

// Route DELETE pour supprimer un produit par ID
router.delete('/:id', (req, res) => {
    // 1. Logique pour trouver et supprimer le produit (omise ici)
    const index = products.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).send({ message: 'Produit non trouvé' });
    }

    products.splice(index, 1);

    // 2. CORRECTION : Utilisation du code 204 No Content pour une suppression réussie
    res.status(204).end(); 
});

// ... autres routes