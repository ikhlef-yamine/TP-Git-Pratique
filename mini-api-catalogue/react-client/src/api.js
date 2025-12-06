

import axios from 'axios';

// L'URL de base correspond à l'adresse et au port de votre backend (définis dans server.js)
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
};

export const createProduct = async (productData) => {
    const response = await apiClient.post('/products', productData);
    return response.data;
};

export const updateProduct = async (id, productData) => {
    const response = await apiClient.put(`/products/${id}`, productData);
    return response.data;
};

export default apiClient;

