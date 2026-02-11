import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LangingPage';
import ResumeUpload from './Pages/ResumeUpload';
import ManualEntry from './Pages/ManualEntry';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
        <Navbar onLoginClick={() => setShowLogin(true)} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/manual-entry" element={<ManualEntry />} />
        </Routes>

        <Footer />

        {showLogin && (
          <div className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
             <div className="bg-white p-10 rounded-3xl relative">
                <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4">✕</button>
                <h2 className="text-2xl font-bold">Login Coming Soon</h2>
             </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;