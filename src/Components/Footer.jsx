import React from 'react';

const Footer = () => {
  return (
   <footer className="bg-primary-dark text-light py-12 px-10 border-t border-primary-muted">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    <div>
    <h3 className="text-xl font-bold text-warm">🧭 Career Compass</h3>
          <p className="text-gray-400">Empowering students with AI-driven career paths and skill validation.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Resume Intelligence</li>
            <li>Skill Roadmap</li>
            <li>Mock Tests</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400">Email: support@careercompass.com</p>
          <p className="text-gray-400">VJTI, Mumbai</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Career Compass. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;