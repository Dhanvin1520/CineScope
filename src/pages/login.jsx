import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (email === "admin@example.com" && password === "123456") {
      login({ email });
      navigate(from, { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>

        <hr />

        <button type="button" onClick={handleGuestLogin} className="guest-btn">
          Continue as Guest
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
