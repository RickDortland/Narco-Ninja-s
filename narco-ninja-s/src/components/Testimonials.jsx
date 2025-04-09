import React from "react";
import "../css/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote: "De herhaalservice maakt het zo makkelijk om mijn medicijnen op tijd te krijgen.",
      author: "Damian Ashworth",
    },
    {
      quote: "De AI-chatbot gaf me snel en duidelijk advies over mijn medicatie.",
      author: "",
    },
    {
      quote: "Ik waardeer de snelle levering en de vriendelijke klantenservice.",
      author: "",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Wat onze klanten zeggen</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p className="quote">"{testimonial.quote}"</p>
            <span className="author">- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;