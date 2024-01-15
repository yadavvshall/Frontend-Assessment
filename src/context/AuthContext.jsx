/* eslint-disable react/prop-types */
// AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, } from './firebasse';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout failed:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
