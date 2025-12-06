

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../api';

const ProductAdd = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({ name, price: parseFloat(price), description });
      alert('Produit ajouté avec succès !');
      navigate('/products'); 
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
      alert('Erreur lors de l\'ajout du produit.');
    }
  };

  return (
    <div>
      <h1>Ajouter un Produit</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <label>
          Nom:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Prix (€):
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required step="0.01" />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Créer le Produit</button>
      </form>
    </div>
  );
};

export default ProductAdd;

