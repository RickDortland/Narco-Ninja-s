import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner"> 
        <div className="navbar-logo">
          💊 <span>MedPlus Apotheek</span>
        </div>

        <nav className="navbar-links">
          <Link to="/medicatie">Medicijnen</Link>
          <Link to="/herhaalservice">Herhaalservice</Link>
          <Link to="/ai-chat">AI Chat</Link>
          <Link to="/over-ons">Over ons</Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/inloggen">
            <button>Inloggen</button>
          </Link>
          <Link to="/registreren">
            <button className="primary">Registreren</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
