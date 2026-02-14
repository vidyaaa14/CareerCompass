import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a username exists in localStorage
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Remove token and username
    window.location.reload(); // Refresh to update UI
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-10 py-8 flex items-center justify-between">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border-b border-white/20 -z-10" />
      
      <div className="flex items-center gap-3 font-black text-2xl tracking-tighter">
        <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">🧭</span>
        CAREER COMPASS
      </div>

      <div className="hidden md:flex gap-12 font-bold text-sm tracking-widest text-primary-dark/60 uppercase">
        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
        <Link to="/resume-upload" className="hover:text-brand transition-colors">Resume Upload</Link>
        <Link to="/contact" className="hover:text-brand transition-colors">Contact us</Link>
      </div>

      {user ? (
        <div className="flex items-center gap-6">
          <span className="font-bold text-primary-dark uppercase tracking-widest text-sm">
            Hi, {user}
          </span>
          <button 
            onClick={handleLogout}
            className="text-accent font-bold text-sm hover:underline"
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <button 
          onClick={onLoginClick}
          className="bg-primary-dark text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-brand transition-all active:scale-95"
        >
          LOGIN
        </button>
      )}
    </nav>
  );
};

export default Navbar;