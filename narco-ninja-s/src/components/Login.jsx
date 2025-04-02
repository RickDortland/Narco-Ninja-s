import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welkom bij MediPlus Apotheek</h1>
        <p>Log in of registreer om uw dienstenlijst te beheren</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Inloggen</h2>
        <div className="form-group">
          <label htmlFor="email">E-mailadres</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="naam@voorbeeld.nl"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Wachtwoord</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </div>
        <button type="submit" className="login-button">Inloggen</button>
        <div className="login-links">
          <a href="#">Wachtwoord vergeten?</a>
        </div>
      </form>
      <div className="footer">
        <p>© 2025 MediPlus Apotheek. Alle rechten voorbehouden.</p>
      </div>
    </div>
  );
};

export default Login;