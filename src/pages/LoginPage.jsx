import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate login (you can replace this with actual authentication logic)
    if (username && password) {
      login(); // Set logged in status
      navigate("/home"); // Redirect to home page after login
    }
  };

  return (
    <div className="page-background">
      <form onSubmit={handleSubmit} className="create-note">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
