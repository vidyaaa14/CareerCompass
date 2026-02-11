import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ManualEntry from './ManualEntry';

const ResumeUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle dropped files
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file selection via button
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF9] pt-40 pb-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-primary-dark mb-6 tracking-tighter">
            Resume <span className="text-brand">Intelligence</span>
          </h2>
          <p className="text-xl text-primary-muted font-medium max-w-2xl mx-auto">
            Our AI will parse your experience to extract your core strengths 
            and recommend the most optimal career paths.
          </p>
        </div>

        {/* Upload Area */}
        <div 
          className={`relative group border-4 border-dashed rounded-[50px] transition-all duration-500 flex flex-col items-center justify-center p-16 md:p-24 ${
            dragActive 
              ? 'border-accent bg-accent/5 scale-[1.02]' 
              : 'border-light/40 bg-white hover:border-brand/40'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {/* Decorative Background Glow */}
          <div className="absolute inset-0 bg-radial from-warm/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[50px]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Dynamic Icon */}
            <div className={`w-24 h-24 rounded-3xl mb-8 flex items-center justify-center text-4xl transition-all duration-500 ${
              file ? 'bg-brand text-white' : 'bg-light/20 text-primary-muted'
            }`}>
              {file ? '✓' : '📄'}
            </div>

            {file ? (
              <div className="animate-in fade-in zoom-in duration-300">
                <p className="text-2xl font-bold text-primary-dark mb-2">{file.name}</p>
                <p className="text-primary-muted font-medium mb-8">File ready for AI analysis</p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-primary-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-brand transition-colors">
                    Start Analysis
                  </button>
                  <button 
                    onClick={() => setFile(null)}
                    className="text-primary-muted hover:text-accent font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  Drag & drop your resume here
                </h3>
                <p className="text-primary-muted font-medium mb-8">
                  Support for PDF and DOCX files
                </p>
                
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleChange}
                  accept=".pdf,.docx"
                />
                
                <button 
                  onClick={() => fileInputRef.current.click()}
                  className="bg-white border-2 border-primary-dark text-primary-dark px-10 py-3 rounded-xl font-bold hover:bg-primary-dark hover:text-white transition-all shadow-lg"
                >
                  Browse Computer
                </button>
              </>
            )}
          </div>
        </div>

        {/* Secondary Option */}
        <div className="mt-12 text-center">
          <p className="text-primary-muted font-medium">
            Don't have a resume yet?{' '}
            <Link 
  to="/manual-entry" 
  className="text-brand font-black hover:underline underline-offset-4 decoration-2"
>
  Fill details manually
</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;