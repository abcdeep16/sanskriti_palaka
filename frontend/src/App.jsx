import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Crafts from "./pages/Crafts";
import Food from "./pages/Food";
import Tours from "./pages/Tours";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/crafts" element={<Crafts />} />
          <Route path="/food" element={<Food />} />
          <Route path="/tours" element={<Tours />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Example (only if you need it) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="section">
                  <h2 className="text-3xl font-bold">Dashboard</h2>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
