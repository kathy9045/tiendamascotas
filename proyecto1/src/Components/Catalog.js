import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const products = [
  { id: 1, name: 'Comedero para Perros', image: 'https://via.placeholder.com/200x150', price: '$15.00' },
  { id: 2, name: 'Juguete para Gatos', image: 'https://via.placeholder.com/200x150', price: '$10.00' },

];

const Catalog = () => {
  return (
    <div className="catalog">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
