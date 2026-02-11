import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* 1. Split Hero Section */}
<section className="flex flex-col lg:flex-row min-h-screen w-full pt-27">        
        {/* Left Side: The Image (Hidden on small screens or stacked) */}
        <div className="lg:w-1/2 w-full h-[400px] lg:h-auto relative overflow-hidden">
          <img 
            src="src/assets/image.png" // Replace with your actual image path in the public folder
            alt="Career Compass"
            className="absolute inset-0 w-full h-full object-cover object-center animate-in fade-in duration-1000"
          />
          {/* Subtle Overlay to match your palette */}
          <div className="absolute inset-0 bg-primary-dark/10 mix-blend-multiply" />
        </div>

        {/* Right Side: The Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start px-10 md:px-20 py-8 bg-[#FFFBF9] text-center lg:text-left">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-black text-primary-dark leading-tight tracking-tighter">
              Your Career <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-accent to-warm">
                Starts Here
              </span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-primary-muted font-medium leading-relaxed opacity-80">
              A minimalist guidance system for the generation. Validate your skills 
              through AI, build your roadmap, and secure your professional future with clarity.
            </p>

            <p className="mt-4 text-sm font-bold text-warm uppercase tracking-widest italic">
              Trusted by students & early professionals
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
              <Link 
                to="/resume-upload" 
                className="bg-primary-dark text-light px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl hover:shadow-primary-muted/30"
              >
                Get your Roadmap
              </Link>
              <button className="group flex items-center gap-2 text-primary-dark font-bold text-lg hover:text-brand transition-colors">
                How it works 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Cards Section (Remains Below) */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <Feature icon="✨" title="Resume IQ" desc="Intelligent parsing for modern profiles." />
        <Feature icon="🎯" title="Skill Check" desc="Adaptive testing that proves your worth." />
        <Feature icon="🛤️" title="Roadmaps" desc="Step-by-step paths to your dream role." />
      </section>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[40px] border border-light/30 bg-white/50 hover:bg-white hover:border-accent/50 transition-all duration-500 hover:shadow-xl">
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-3 text-primary-dark">{title}</h3>
    <p className="text-primary-muted font-medium leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;