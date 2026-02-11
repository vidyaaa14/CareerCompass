import React from 'react';
import { Link } from 'react-router-dom';
import ResumeUpload from '../Pages/ResumeUpload';
const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-10 py-8 flex items-center justify-between">
      {/* Glassmorphic Container */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border-b border-white/20 -z-10" />
      
      <div className="flex items-center gap-3 font-black text-2xl tracking-tighter">
        <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">🧭</span>
        CAREER COMPASS
      </div>

      <div className="hidden md:flex gap-12 font-bold text-sm tracking-widest text-primary-dark/60 uppercase">
        <a href="/" className="hover:text-brand transition-colors">Home</a>
        <Link to="/resume-upload"  className="hover:text-brand transition-colors">Resume Upload</Link>
        <a href="#" className="hover:text-brand transition-colors">How it works</a>
      </div>

      <button 
        onClick={onLoginClick}
        className="bg-primary-dark text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-brand transition-all active:scale-95"
      >
        LOGIN
      </button>
    </nav>
  );
};

export default Navbar;