import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import Medicatie from "./pages/Medicatie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

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
    <AuthProvider>
      <Router>
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
      </Router>
    </AuthProvider>
  );
}

export default App;
