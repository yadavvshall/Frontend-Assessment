/* eslint-disable no-unused-vars */
// src/components/PasswordRecovery.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const PasswordRecovery = () => {
  const { recoverPassword } = useAuth();
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      // Placeholder logic - replace with actual API request
      console.log('Recovering password...');
      // await recoverPassword(email);
    } catch (error) {
      console.error('Password recovery failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Password Recovery</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="button" onClick={handlePasswordRecovery}>Recover Password</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
