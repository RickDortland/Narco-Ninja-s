import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welkom bij MedPlus Apotheek</h1>
        <p>Uw gezondheid, onze zorg. Bestel eenvoudig uw medicijnen online.</p>
        <a href="/medicatie" className="hero-button">
          Bekijk Medicatie
        </a>
      </div>
    </section>
  );
}

export default Hero;