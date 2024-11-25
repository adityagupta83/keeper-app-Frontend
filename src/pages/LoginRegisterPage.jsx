import React from "react";
import { Link } from "react-router-dom";

function LoginRegisterPage({ login }) {
  return (
    <div className="page-background">
      <div className="login-register-container">
        <h2>Welcome to the Notes App</h2>
        <button onClick={login} className="login-register-button">Login</button>
        <Link to="/register">
          <button className="login-register-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
