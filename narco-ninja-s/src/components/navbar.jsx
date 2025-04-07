import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
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
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>
              👤 {user.email.split("@")[0]}
            </span>
            <button onClick={logout}>Uitloggen</button>
          </>
        ) : (
          <>
            <Link to="/inloggen">
              <button>Inloggen</button>
            </Link>
            <Link to="/registreren">
              <button className="primary">Registreren</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
