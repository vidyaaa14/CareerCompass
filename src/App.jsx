import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LangingPage';
import ResumeUpload from './Pages/ResumeUpload';
import ManualEntry from './Pages/ManualEntry';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  
  const endpoint = isRegister ? '/api/users/register/' : '/api/users/login/'; 
  
  try {
    const response = await axios.post(`http://127.0.0.1:8000${endpoint}`, formData);
    
    // If it's a login, save the token and username
    if (!isRegister && response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
    }

    setShowLogin(false);
    alert(isRegister ? "Account Created! Please Sign In." : `Welcome back, ${response.data.username}!`);
    
    // Optional: Reload or update state to show "Logout" in Navbar
    window.location.reload(); 
  } catch (err) {
  // Log the actual validation errors from Django
  console.log("Django Error Details:", err.response?.data);
  
  // Update the UI error message
  const serverError = err.response?.data;
  if (serverError?.username) {
    setError(`Username: ${serverError.username[0]}`);
  } else if (serverError?.email) {
    setError(`Email: ${serverError.email[0]}`);
  } else {
    setError(serverError?.message || "Invalid input. Please check your details.");
  }
}
};

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar onLoginClick={() => { setShowLogin(true); setIsRegister(false); }} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/manual-entry" element={<ManualEntry />} />
        </Routes>

        <Footer />

        {/* Auth Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in">
            <div className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-md relative animate-in zoom-in-95">
              <button onClick={() => setShowLogin(false)} className="absolute top-8 right-8 text-primary-muted hover:text-brand transition-colors">✕</button>
              
              <h2 className="text-4xl font-black text-primary-dark mb-2">
                {isRegister ? "Join Us" : "Welcome Back"}
              </h2>
              <p className="text-primary-muted mb-8 font-medium">
                {isRegister ? "Create your career compass account." : "Continue your journey."}
              </p>

              {error && <p className="text-accent text-sm font-bold mb-4">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                {isRegister && (
                  <input 
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange}
                    className="w-full bg-light/10 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-brand transition-all" 
                    required 
                  />
                )}
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address" 
                  onChange={handleChange}
                  className="w-full bg-light/10 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-brand transition-all" 
                  required 
                />
                <input 
                  name="password" 
                  type="password" 
                  placeholder="Password" 
                  onChange={handleChange}
                  className="w-full bg-light/10 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-brand transition-all" 
                  required 
                />
                
                <button type="submit" className="w-full bg-linear-to-r from-brand to-accent text-white py-5 rounded-2xl font-black text-xl shadow-lg hover:opacity-90 transition-opacity mt-4">
                  {isRegister ? "Create Account" : "Sign In"}
                </button>
              </form>

              <button 
                onClick={() => setIsRegister(!isRegister)}
                className="w-full text-center mt-6 text-sm font-bold text-primary-muted hover:text-brand transition-colors"
              >
                {isRegister ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;