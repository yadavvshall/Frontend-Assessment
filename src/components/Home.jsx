// src/components/Home.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup
import { GoogleAuthProvider } from "../context/firebasse"; // Import GoogleAuthProvider from your firebase.js file

const Home = () => {
  const { user, login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login("user@example.com", "password");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(provider);
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">
        Welcome, {user ? user.email : "Guest"}!
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Home;
