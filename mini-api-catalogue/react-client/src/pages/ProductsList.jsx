

// react-client/src/pages/ProductsList.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); 

  if (loading) {
    return <div>Chargement des produits...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="products-list-container">
      <h1>Catalogue de Produits</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix (€)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td> 
              <td>{product.price} €</td>
              <td>
                <Link to={`/products/edit/${product.id}`}>Modifier</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length === 0 && <p>Aucun produit trouvé.</p>}
    </div>
  );
};

export default ProductsList;

