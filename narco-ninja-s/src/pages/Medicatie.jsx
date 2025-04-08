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
    image: "https://media.istockphoto.com/id/1022216070/nl/foto/pakje-generieke-paracetamol-tabletten.webp?s=1024x1024&w=is&k=20&c=wUazfYGve6sdeAWxTlpPxNvuv8Z7KIEn-s6j1ncc4jc="
  },
  {
    id: 2,
    name: "Ibuprofen",
    description: "Ontstekingsremmende pijnstiller",
    price: 3.49,
    image: "https://media.istockphoto.com/id/1359178057/nl/foto/ibuprofen-pill-box-box-paper-blister-tablets.webp?s=1024x1024&w=is&k=20&c=hAEdI7SAINeqwUrckEqCfSD4NbE67Kcgwo2UbHLEwhE="
  },
  {
    id: 3,
    name: "Omeprazol",
    description: "Maagzuurremmer",
    price: 5.99,
    image: "https://cdn.pixabay.com/photo/2019/07/21/16/50/tablets-4353108_1280.jpg"
  },
  {
    id: 4,
    name: "Cetirizine",
    description: "Antihistaminicum tegen allergieën",
    price: 4.29,
    image: "https://cdn.pixabay.com/photo/2016/02/09/19/45/pills-1190217_1280.jpg"
  },
  {
    id: 5,
    name: "Amoxicilline",
    description: "Antibioticum",
    price: 7.99,
    image: "https://cdn.pixabay.com/photo/2017/03/02/00/27/insulin-2110059_1280.jpg"
  },
  {
    id: 6,
    name: "Salbutamol",
    description: "Luchtwegverwijder bij astma",
    price: 12.49,
    image: "https://media.istockphoto.com/id/1762593555/nl/foto/human-hand-holding-medicine-asthma-inhaler.webp?s=1024x1024&w=is&k=20&c=DpKTJP6f4WtZguafITiLkVATqnt57X3zT85-xZQCtuI="
  },
];


function Medicatie() {
  return (
    <div className="app">
      <Navbar /> 
      <main className="main-content">
        <h1>Medicijnen</h1>
        <FilterBar />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer /> 
    </div>
  );
}

export default Medicatie;
