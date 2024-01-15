// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SecretsProvider } from './context/SecretsContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PasswordRecovery from './components/PasswordRecovery';

function App() {
  return (
    <AuthProvider>
      <SecretsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
          </Routes>
        </Router>
      </SecretsProvider>
    </AuthProvider>
  );
}

export default App;
