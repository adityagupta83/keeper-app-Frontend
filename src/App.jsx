import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"; // Ensure you have this in your components folder
import Footer from "./components/Footer"; // Ensure you have this in your components folder
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* Render Header for all pages except Login/Register */}
        {isLoggedIn && <Header />}

        <Routes>
          {/* Route for Login Page */}
          <Route path="/login" element={<LoginPage login={login} />} />
          
          {/* Route for Register Page */}
          <Route path="/register" element={<RegisterPage />} />

          {/* HomePage is protected, only accessible if logged in */}
          <Route
            path="/home"
            element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
          />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>

        {/* Render Footer for all pages except Login/Register */}
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
