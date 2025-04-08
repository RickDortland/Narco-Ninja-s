import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../css/auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Wachtwoorden komen niet overeen");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/medicatie");
    } catch (err) {
      setError("Registratie mislukt. Probeer opnieuw.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registreren</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="E-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Bevestig wachtwoord"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="auth-error">{error}</p>}
        <button type="submit">Account aanmaken</button>
      </form>

      <p className="register-link">
        Al een account? <Link to="/inloggen">Inloggen</Link>
      </p>
    </div>
  );
}

export default Register;
