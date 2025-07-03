import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    
  }



  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <p>Or login with:</p>
        <button onClick={() => handleSocialLogin("Google")}>Google</button>
        <button onClick={() => handleSocialLogin("Apple ID")}>Apple ID</button>
        <button onClick={() => handleSocialLogin("Twitter")}>Twitter</button>
      </div>
    </div>
  );
}

export default Login;