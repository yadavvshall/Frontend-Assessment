/* eslint-disable no-unused-vars */
// src/components/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Placeholder logic - replace with actual API request
      console.log('Logging in...');
      // await login({ email, password });
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
