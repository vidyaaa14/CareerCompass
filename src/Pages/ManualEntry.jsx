import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManualEntry = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-[#FFFBF9] pt-40 pb-20 px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        
        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-light/30 -z-10" />
          <StepIndicator active={step >= 1} number="1" label="Basic" />
          <StepIndicator active={step >= 2} number="2" label="Skills" />
          <StepIndicator active={step >= 3} number="3" label="Interests" />
        </div>

        <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl shadow-primary-dark/5 border border-light/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-primary-dark">Tell us about yourself</h2>
              <div className="space-y-4">
                <InputField label="Full Name" placeholder="Aarav Sharma" />
                <InputField label="Current Education" placeholder="B.Tech Computer Science" />
                <InputField label="Graduation Year" placeholder="2026" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-primary-dark">Your Technical Toolkit</h2>
              <p className="text-primary-muted">List the languages or tools you've worked with.</p>
              <textarea 
                className="w-full bg-light/10 border-2 border-light/30 rounded-2xl p-6 outline-none focus:border-accent min-h-[150px] transition-colors"
                placeholder="e.g. Python, React, SQL, Figma..."
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-primary-dark">Career Aspirations</h2>
              <p className="text-primary-muted">What kind of roles excite you?</p>
              <div className="grid grid-cols-2 gap-4">
                <InterestCard label="Software Dev" />
                <InterestCard label="Data Science" />
                <InterestCard label="UI/UX Design" />
                <InterestCard label="Management" />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-light/20">
            {step > 1 ? (
              <button onClick={prevStep} className="text-primary-muted font-bold hover:text-primary-dark">Back</button>
            ) : (
              <div />
            )}
            
            {step < 3 ? (
              <button 
                onClick={nextStep} 
                className="bg-primary-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-brand transition-all"
              >
                Next Step
              </button>
            ) : (
              <button 
                onClick={() => navigate('/analysis')}
                className="bg-linear-to-r from-brand to-accent text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all"
              >
                Generate My Roadmap
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* Helper Components for clean code */
const StepIndicator = ({ active, number, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${active ? 'bg-accent text-white' : 'bg-white border-2 border-light text-primary-muted'}`}>
      {number}
    </div>
    <span className={`text-xs font-bold uppercase tracking-widest ${active ? 'text-primary-dark' : 'text-primary-muted'}`}>{label}</span>
  </div>
);

const InputField = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-bold text-primary-dark mb-2 ml-1">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full bg-light/10 border-2 border-transparent p-4 rounded-xl outline-none focus:border-brand transition-all" 
    />
  </div>
);

const InterestCard = ({ label }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button 
      onClick={() => setSelected(!selected)}
      className={`p-4 rounded-2xl border-2 font-bold transition-all text-sm ${selected ? 'border-accent bg-accent/5 text-accent' : 'border-light/20 text-primary-muted hover:border-light'}`}
    >
      {label}
    </button>
  );
}

export default ManualEntry;