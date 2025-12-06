// mini-api-catalogue/server.js

const express = require('express');
const cors = require('cors'); // --- NOUVELLE LIGNE ---
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON dans les requêtes (pour les POST/PUT)
app.use(express.json());

// --- NOUVELLE LIGNE ---
// Active CORS pour permettre au frontend React de se connecter (depuis http://localhost:5173)
app.use(cors({
    origin: 'http://localhost:5173' 
}));

// Routes principales
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('API Catalogue fonctionne.');
});
const { sequelize } = require('./models');

sequelize.sync({ alter: true })
    .then(() => console.log("📦 Base SQLite synchronisée"))
    .catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});


