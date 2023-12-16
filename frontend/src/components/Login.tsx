import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../style/Login.css";

export const Login = (props:any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e:any) => {
      e.preventDefault();
      AuthService.login(email, pass).then(
        () => {
          navigate('/candidates')
        },
      );
    };

  return (
      <div className="auth-div">
          <div className="auth-form-container">
              <h2>Login</h2>
              <form className="login-form" onSubmit={handleLogin}>
                  <label htmlFor="email">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email" />
                  <label htmlFor="password">Password</label>
                  <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                  <button type="submit">Log In</button>
              </form>
              <button className="link-btn" onClick={() => navigate('/signup')}>Don't have an account? Register here.</button>
          </div>
      </div>
  )
}

export default Login;
