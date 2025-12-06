# TP-Git-Pratique : Mini Application Catalogue Full-Stack realiser par YAMINE IKHLEF & PERSIDE MENAYAME MANSANGA
Ce projet est une application web full-stack simple, développée dans le cadre d'un projet de pratique Git. Il se compose d'une API backend Node.js/Express avec une base de données SQLite et d'un frontend React/Vite pour gérer un catalogue de produits.

## Architecture du Projet

Le projet est divisé en deux répertoires principaux :

- `mini-api-catalogue/`: Le serveur backend (API REST).
- `react-client/`: L'interface utilisateur frontend (Single Page Application).

## Technologies Utilisées

### Backend (`mini-api-catalogue`)

*   **[Node.js](nodejs.org)**
*   **[Express.js](expressjs.com)** : Framework web pour le routage de l'API.
*   **[SQLite](sqlite.org)** : Base de données légère.
*   **[Sequelize](sequelize.org)** : ORM (Object-Relational Mapper) pour interagir avec la base de données.
*   **CORS** : Middleware pour gérer les requêtes cross-origin entre le frontend et le backend.

### Frontend (`react-client`)

*   **[React](react.dev)** : Bibliothèque JavaScript pour construire l'interface utilisateur.
*   **[Vite](vitejs.dev)** : Outil de build rapide pour le développement frontend.
*   **[Axios](axios-http.com)** : Client HTTP pour faire des requêtes vers l'API backend.
*   **[React Router DOM](reactrouter.com)** : Bibliothèque pour la navigation côté client.

## Instructions d'Installation et de Lancement

Pour lancer le projet localement, suivez ces étapes dans deux terminaux distincts.

### Prérequis

Assurez-vous d'avoir installé [Node.js et npm](nodejs.org) sur votre machine.

### 1. Lancement du Backend (API)

Dans votre **premier terminal** :

```bash
cd mini-api-catalogue
npm install         # Installe les dépendances du backend
node server.js      # Lance le serveur API sur http://localhost:3000
Utilisez le code avec précaution.

Note : Le serveur doit rester actif (le terminal ne doit pas afficher le prompt de commande) pour que le frontend puisse s'y connecter.
2. Lancement du Frontend (Interface Utilisateur)
Dans votre deuxième terminal :
bash
cd react-client
npm install         # Installe les dépendances du frontend
npm run dev         # Lance l'application React sur http://localhost:5173
Utilisez le code avec précaution.

Ouvrez votre navigateur web et accédez à l'adresse fournie (généralement http://localhost:5173) pour interagir avec l'application.
Utilisation de l'Application
Une fois les deux serveurs lancés, vous pouvez :
Consulter la liste des produits dans le catalogue.
Ajouter de nouveaux produits via le formulaire dédié.
Les données sont stockées localement dans le fichier database.sqlite généré par Sequelize.

