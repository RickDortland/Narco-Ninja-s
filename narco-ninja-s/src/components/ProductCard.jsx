import React from "react";
import "../css/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">€{product.price.toFixed(2)}</p>
      <div className="card-actions">
        <button className="order-button">+ Bestellen</button>
        <a className="more-info" href="#">Meer info</a>
      </div>
    </div>
  );
}

export default ProductCard;
