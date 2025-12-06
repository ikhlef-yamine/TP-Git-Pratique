

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../api';

const ProductEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setName(data.name);
        setPrice(data.price.toString());
        setDescription(data.description);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement du produit:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, { name, price: parseFloat(price), description });
      alert('Produit mis à jour avec succès !');
      navigate('/products');
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      alert('Erreur lors de la mise à jour du produit.');
    }
  };

  if (loading) {
    return <div>Chargement des détails du produit...</div>;
  }

  return (
    <div>
      <h1>Modifier le Produit #{id}</h1>
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
        <button type="submit">Sauvegarder les modifications</button>
      </form>
    </div>
  );
};

export default ProductEdit;

