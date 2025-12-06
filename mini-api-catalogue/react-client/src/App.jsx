

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsList from './pages/ProductsList';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Routes principales de l'application */}
          <Route path="/" element={<ProductsList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


