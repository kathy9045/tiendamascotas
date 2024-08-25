import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const products = [
  { id: 1, name: 'Comedero para Perros', image: 'https://via.placeholder.com/400x300', description: 'Un comedero duradero para perros.', price: '$15.00', availableColors: ['#ff0000', '#00ff00', '#0000ff'] },
  { id: 2, name: 'Juguete para Gatos', image: 'https://via.placeholder.com/400x300', description: 'Un juguete divertido para gatos.', price: '$10.00', availableColors: ['#ff0000', '#0000ff'] },
  // Agrega más productos aquí
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div className="color-options">
        {product.availableColors.map((color) => (
          <div
            key={color}
            className="color-swatch"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <button onClick={() => alert('Iniciar sesión para agregar al carrito')}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetails;
