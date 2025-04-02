import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <section className="services">
        <ServiceCard
          title="Medicatie bestellen"
          description="Bestel uw medicijnen eenvoudig online."
          linkText="Meer informatie"
          linkHref="#"
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

export default App;
