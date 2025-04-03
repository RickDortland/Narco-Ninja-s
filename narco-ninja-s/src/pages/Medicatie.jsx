import React from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "../css/Medicatie.css";

const products = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Pijnstiller en koortsverlagend middel",
    price: 2.09,
  },
  {
    id: 2,
    name: "Ibuprofen",
    description: "Ontstekingsremmende pijnstiller",
    price: 3.49,
  },
  {
    id: 3,
    name: "Omeprazol",
    description: "Maagzuurremmer",
    price: 5.99,
  },
  {
    id: 4,
    name: "Cetirizine",
    description: "Antihistaminicum tegen allergieën",
    price: 4.29,
  },
  {
    id: 5,
    name: "Amoxicilline",
    description: "Antibioticum",
    price: 7.99,
  },
  {
    id: 6,
    name: "Salbutamol",
    description: "Luchtwegverwijder bij astma",
    price: 12.49,
  },
];

function Medicatie() {
  return (
    <>
      <Navbar /> 
      <div className="app"> 
        <main className="main-content">
          <h1>Medicijnen</h1>
          <FilterBar />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
      <Footer /> 
    </>
  );
}

export default Medicatie;
