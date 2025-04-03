import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import Medicatie from './pages/Medicatie';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Header />
      <section className="services">
        <ServiceCard
          title="Medicatie bestellen"
          description="Bestel uw medicijnen eenvoudig online."
          linkText="Meer informatie"
          linkHref="/medicatie" 
        />
        <ServiceCard
          title="Herhaalservice"
          description="Automatisch uw medicijnen herhalen."
          linkText="Aanmelden"
          linkHref="#"
        />
        <ServiceCard
          title="AI Chatbot"
          description="Chat met onze AI voor advies en ondersteuning."
          linkText="Start chat"
          linkHref="#"
        />
      </section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicatie" element={<Medicatie />} />
      </Routes>
    </Router>
  );
}

export default App;


