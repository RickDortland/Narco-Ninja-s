import React from "react";
import "./css/Home.css";

function Home() {
  const services = [
    {
      title: "Medicatie bestellen",
      description: "Bestel uw medicijnen eenvoudig online en ontvang ze snel thuis.",
      icon: "💊",
      linkText: "Meer informatie",
      linkHref: "/medicatie",
    },
    {
      title: "Herhaalservice",
      description: "Automatisch uw medicijnen herhalen zonder zorgen.",
      icon: "🔄",
      linkText: "Aanmelden",
      linkHref: "#",
    },
    {
      title: "AI Chatbot",
      description: "Krijg direct advies en ondersteuning via onze slimme chatbot.",
      icon: "🤖",
      linkText: "Start chat",
      linkHref: "#",
    },
  ];

  return (
    <div className="home">
      <section className="intro">
        <h1>Welkom bij MedPlus Apotheek</h1>
        <p>Uw gezondheid, onze zorg. Ontdek onze diensten en bestel uw medicijnen eenvoudig online.</p>
      </section>

      <section className="services">
        <h2>Onze Diensten</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.linkHref} className="service-link">
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;