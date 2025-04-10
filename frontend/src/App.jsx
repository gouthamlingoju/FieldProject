import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Vnrheader from "./components/Vnrheader";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Vnrheader />
      </div>
      <div className="flex-1 overflow-auto mt-16 mb-16">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;