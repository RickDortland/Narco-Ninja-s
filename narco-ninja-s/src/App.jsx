import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Medicatie from "./pages/Medicatie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "./css/Hero.css";
import "./css/Services.css";
import "./css/Testimonials.css";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/medicatie"
            element={
              <PrivateRoute>
                <Medicatie />
              </PrivateRoute>
            }
          />
          <Route path="/inloggen" element={<Login />} />
          <Route path="/registreren" element={<Register />} />
        </Routes>
        <Footer />

        {/* Chat Button */}
        <button className="chat-button" onClick={toggleChat}>
          💬
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h4>AI Chat</h4>
              <button className="close-chat" onClick={toggleChat}>
                ✖
              </button>
            </div>
            <div className="chat-body">
              <p>Hallo! Hoe kan ik je helpen?</p>
              {/* Voeg hier je chatlogica toe */}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                placeholder="Typ een bericht..."
                className="chat-input"
              />
              <button className="send-button">Verstuur</button>
            </div>
          </div>
        )}
      </Router>
    </AuthProvider>
  );
}

export default App;
