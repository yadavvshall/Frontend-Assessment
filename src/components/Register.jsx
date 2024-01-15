/* eslint-disable no-unused-vars */
// src/components/Register.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Placeholder logic - replace with actual API request
      console.log('Registering user...');
      // await register({ username, email, password });
      // Optionally, automatically log in the user after registration
      // await login({ email, password });
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
