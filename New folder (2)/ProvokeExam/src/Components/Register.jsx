// Register.jsx

import React, { useState } from 'react';
import './Register.css'; // Import the external CSS file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <h2 className="title">Create Account</h2>
      <form onSubmit={handleSubmit}>
        Name
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          required
        />
        Email
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        Password
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <div className="checkbox-container">
          <input type="checkbox" id="remember" className="checkbox" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      <p className="link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
