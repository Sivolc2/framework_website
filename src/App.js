import React from 'react';
import { Twitter, Github, Linkedin, Mail, Globe } from 'lucide-react'; // Assuming Github & Linkedin might be added later

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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-gray-100 font-mono relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 z-0">
        <div className="grid-overlay"></div>
        {/* Corner decorative elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-pink-500"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-400"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-pink-500"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-400"></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-20 left-8 text-pink-500 text-xs">++++</div>
        <div className="absolute top-32 right-8 text-cyan-400 text-xs">++++</div>
        <div className="absolute bottom-32 left-8 text-pink-500 text-xs">++++</div>
        
        {/* Side panels */}
        <div className="absolute left-0 top-1/4 w-8 h-32 bg-gradient-to-b from-pink-500/20 to-pink-500/5 border-r border-pink-500/30"></div>
        <div className="absolute right-0 top-1/3 w-8 h-40 bg-gradient-to-b from-cyan-400/20 to-cyan-400/5 border-l border-cyan-400/30"></div>
      </div>

      {/* Main container with dramatic border */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-6xl relative">
          {/* Main cyberpunk frame */}
          <div className="relative border-2 border-pink-500/50 bg-black/40 backdrop-blur-md p-12 mx-4">
            {/* Corner cuts */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-pink-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-pink-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-cyan-400"></div>
            
            {/* Header with logo */}
            <header className="text-center mb-12">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/70 mb-6 flex items-center justify-center bg-black/70">
                <img 
                  src="/images/logo.png" 
                  alt="Framework Zero Logo" 
                  className="w-20 h-auto"
                />
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://x.com/frameworkzero" target="_blank" rel="noopener noreferrer" aria-label="Framework Zero on X" className="text-cyan-400 hover:text-pink-500 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="mailto:clovis@framework-zero.com" aria-label="Email Framework Zero" className="text-cyan-400 hover:text-pink-500 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://www.clovisvt.com/" target="_blank" rel="noopener noreferrer" aria-label="Clovis Vinant-Tang's Website" className="text-cyan-400 hover:text-pink-500 transition-colors">
                  <Globe size={24} />
                </a>
              </div>
            </header>

            {/* Main title */}
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider mb-8" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                Framework<br />Zero
              </h1>
              
              {/* Tagline in dramatic box */}
              <div className="relative inline-block">
                <div className="border-2 border-cyan-400 bg-black/60 px-8 py-4 relative">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
                  <h2 className="text-xl md:text-2xl font-light text-cyan-400 tracking-wide">
                    Leveling Up <span className="font-bold text-white">Vibe Coders</span> To <span className="font-bold text-white">Vibe CEOs!</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center mb-16">
              <Button
                label="GET INVOLVED"
                variant="accent"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAms8ENSZhoMYtZ0Q-Iv341s_On_lYkvQF5qC5BXbFdEUe8Q/viewform"
                className="px-12 py-4 text-xl tracking-widest font-bold border-2 border-green-400 bg-green-400/20 hover:bg-green-400/40 text-green-400"
              />
            </div>

            {/* Content in single paragraph */}
            <div className="mb-16 text-center">
              <p className="text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
                Framework Zero empowers solo entrepreneurs and small teams by transforming complex company operations into an intuitive, <span className="text-cyan-400 font-semibold">gamified experience</span>. We're your AI co-pilot, helping you level up from Vibe Coder to Vibe CEO.<br /><br />Our vision is to build the infrastructure for the <span className="text-pink-500 font-semibold">AI-Economy</span>: a future of "Infinite Companies, Infinite Creation," enabling millions of AI-run micro-firms where human preferences are seamlessly integrated.
              </p>
            </div>

            {/* Who We Are Section */}
            <div className="border-t border-gray-600/50 pt-12">
              <h3 className="text-4xl font-bold text-center mb-12 text-white tracking-wider" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Who We Are</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-pink-500/30 bg-black/30 p-8 relative">
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-pink-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-pink-500"></div>
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">Clovis Vinant-Tang</h4>
                  <p className="text-lg text-pink-500 mb-4 italic">"Grand Stratego"</p>
                  <p className="text-gray-300 leading-relaxed">
                    With 5+ years in satellite network planning, Clovis brings expertise in complex systems. Background in Physics & Economics from McGill University. A sci-fi galaxy brain, passionate about building the future.
                  </p>
                </div>
                <div className="border border-cyan-400/30 bg-black/30 p-8 relative">
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">Connie Li</h4>
                  <p className="text-lg text-pink-500 mb-4 italic">"RPG Princess"</p>
                  <p className="text-gray-300 leading-relaxed">
                    A 10+ year veteran as a Tumblr engineering lead, Connie excels in user-centric design and scaling platforms. Holds an Economics degree from Princeton University. Meme culture connoisseur and expert in digital engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gray-600/50 text-center">
              <div className="text-cyan-400/70 text-sm mb-6 tracking-widest">BASED IN SAN FRANCISCO</div>
              <div className="flex justify-center items-center gap-4 text-sm tracking-wider mb-8">
                <a href="mailto:clovis@framework-zero.com" className="text-cyan-400 hover:text-pink-500 transition-colors inline-flex items-center justify-center group">
                  <Mail size={18} className="mr-2" />
                  <span className="text-gray-300">[</span> REACH OUT: clovis@framework-zero.com <span className="text-gray-300">]</span>
                </a>
              </div>
              <div className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Framework Zero
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 