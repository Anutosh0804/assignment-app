import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../style/Login.css";

export const SignUp = (props:any) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        AuthService.register(name, email, pass).then(
          () => {
            navigate('/')
          },
        );
    }

    return (
        <div className="auth-div">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your name" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter a strong password" id="password" name="password" />
                    <button type="submit">Sign Up</button>
                </form>
                <button className="link-btn" onClick={() => navigate('/')}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}

export default SignUp;