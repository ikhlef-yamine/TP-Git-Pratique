

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px' }}>
      <Link to="/products">Catalogue</Link>
      <Link to="/products/add">Ajouter un produit</Link>
    </nav>
  );
};

export default Navbar;

