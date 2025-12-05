const express = require('express');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON dans les requêtes (pour les POST/PUT)
app.use(express.json());

// Routes principales
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('API Catalogue fonctionne.');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

