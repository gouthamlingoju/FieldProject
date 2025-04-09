import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Vnrheader from "./components/Vnrheader";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Vnrheader />
      <div className="flex-1 overflow-auto">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;