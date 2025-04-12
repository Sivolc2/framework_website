import React from 'react';

const Button = ({ 
  label, 
  onClick, 
  variant = 'secondary',
  className = '',
  href = ''
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20',
    accent: 'bg-[#22c55e]/80 text-white border border-[#22c55e]/30 button-glow'
  };

  return (
    <a
      href={href}
      target={href.startsWith('#') ? '' : "_blank"}
      rel={href.startsWith('#') ? '' : "noopener noreferrer"}
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-3 rounded-md font-mono transition-all ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#05112a] text-gray-100 font-mono relative">
      {/* Cyberpunk background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-[#05112a] to-[#061631] z-0 overflow-hidden">
        <div className="grid-overlay"></div>
      </div>
      
      {/* Header */}
      <header className="py-8 text-center relative z-10">
        {/* Logo image with circular mask */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-[#60a5fa]/50 glow-border flex items-center justify-center bg-black/50">
          <img 
            src="/images/logo.png" 
            alt="Framework Zero Logo" 
            className="w-32 h-auto mx-auto"
          />
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-8 py-8 border border-[#0c275a] bg-[#05112a]/95 backdrop-blur-md rounded-md mt-4 relative z-10 shadow-blue">
        <h1 className="text-5xl font-bold text-center mb-3 text-white tracking-wider glow-text">Framework Zero</h1>
        <h2 className="text-2xl font-light text-center mb-12 text-[#5eead4] tracking-wide">for the Post-Labor Economy</h2>
        
        <p className="mb-8 leading-relaxed text-lg">
          At Framework Zero, we're building infrastructure for the future where autonomous AI aligns seamlessly
          with human goals.
        </p>
        
        <p className="mb-8 leading-relaxed text-lg">
          Our first application is a 3D printing plant co-managed by human governance and AI-driven planning.
          We focus on <em className="text-[#5eead4]">preference aggregation</em> through digital twinning: creating virtual models that enable every stakeholder—from machine operators to 
          investors—to visualize, simulate, and participate in governance decisions. The result? Transparent, shared ownership, and 
          frictionless coordination for real-world production.
        </p>

        <p className="mb-8 leading-relaxed text-lg">
          Our vision expands beyond 3D printing: we aim to provide <strong className="text-[#60a5fa]">decentralized oversight</strong>, 
          shared resource management, and <strong className="text-[#60a5fa]">immutable logging</strong> for any organization ready to step 
          into a post-labor economy.
        </p>

        <p className="mb-10 leading-relaxed text-lg">
          Join us as we build a future where decisions are transparent, ownership is shared, and AI-driven 
          companies are aligned with the people they serve.
        </p>
        
        <div className="flex justify-center mt-12">
          <Button
            label="GET INVOLVED"
            variant="accent"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAms8ENSZhoMYtZ0Q-Iv341s_On_lYkvQF5qC5BXbFdEUe8Q/viewform"
            className="px-10 py-3 text-base tracking-widest"
          />
        </div>
        
        {/* Location and Contact Section */}
        <div className="mt-16 pt-8 border-t border-[#0c275a]/70 text-center">
          <div className="text-[#5eead4]/70 text-xs mb-6 tracking-widest">BASED IN SAN FRANCISCO</div>
          
          <div className="flex flex-col gap-6 text-sm tracking-wider">
            <a href="mailto:clovis@framework-zero.com" className="text-[#60a5fa] hover:text-[#60a5fa]/80 transition-colors inline-flex items-center justify-center">
              <span className="text-[#5eead4]">[</span> REACH OUT: clovis@framework-zero.com <span className="text-[#5eead4]">]</span>
            </a>
            
            <a href="https://www.clovisvt.com/" target="_blank" rel="noopener noreferrer" className="text-[#60a5fa]/60 hover:text-[#60a5fa]/80 transition-colors inline-flex items-center justify-center text-xs">
              <span className="text-[#5eead4]/60">[</span> www.clovisvt.com <span className="text-[#5eead4]/60">]</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 