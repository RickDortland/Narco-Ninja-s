import React from "react";
import "../css/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">€{product.price.toFixed(2)}</p>
      <div className="product-actions">
        <button>+ Bestellen</button>
        <a href="#">Meer info</a>
      </div>
    </div>
  );
}


export default ProductCard;
