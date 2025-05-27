Okay, I've reviewed the PowerPoint presentation and your instructions. I'll update the `src/App.js` file to reflect the new content, tone, and structure suitable for a pre-seed startup's static landing page.

Here's how the `src/App.js` will be modified:

1.  **Header Links:** Added X (Twitter), Email, and Clovis's personal website link as icons below the logo.
2.  **Tagline:** Updated to "Leveling Up Vibe Coders To Vibe CEOs!" and styled it within a bordered box to echo the presentation slide's aesthetic.
3.  **Call to Action (CTA):** The "GET INVOLVED" button (linking to the existing Google Form) is now placed prominently near the top, right after the tagline.
4.  **Main Descriptive Text:** Replaced the previous text (which was more focused on a 3D printing example and technical terms like "digital twinning") with content derived from the PPT. The new text emphasizes:
    *   Gamified and intuitive company operations.
    *   Empowering solo entrepreneurs ("Vibe Coders to Vibe CEOs").
    *   AI app orchestration to simplify AI tool adoption.
    *   The broader vision of an "AI-Economy."
5.  **"Who We Are" Section:** Added a new section introducing Clovis Vinant-Tang and Connie Li with their "classes" and brief bios based on the PPT.
6.  **Footer:** Simplified the footer to include "Based in San Francisco," the primary contact email, and a copyright notice. Redundant links (like Clovis's personal site, now in header icons) were removed from the footer for clarity.
7.  **Styling:** Minor adjustments to margins, button size, and styling for the new sections to maintain visual consistency with the existing cyberpunk theme.

Here is the updated `src/App.js`:

```javascript
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
    <div className="min-h-screen bg-[#05112a] text-gray-100 font-mono relative">
      {/* Cyberpunk background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-[#05112a] to-[#061631] z-0 overflow-hidden">
        <div className="grid-overlay"></div>
      </div>

      {/* Header */}
      <header className="py-8 text-center relative z-10">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-[#60a5fa]/50 glow-border flex items-center justify-center bg-black/50">
          <img
            src="/images/logo.png"
            alt="Framework Zero Logo"
            className="w-32 h-auto mx-auto"
          />
        </div>
        {/* Social Links */}
        <div className="flex justify-center space-x-5 mt-6">
          <a href="https://x.com/frameworkzero" target="_blank" rel="noopener noreferrer" aria-label="Framework Zero on X" className="text-[#60a5fa] hover:text-[#5eead4] transition-colors">
            <Twitter size={28} />
          </a>
          <a href="mailto:clovis@framework-zero.com" aria-label="Email Framework Zero" className="text-[#60a5fa] hover:text-[#5eead4] transition-colors">
            <Mail size={28} />
          </a>
          <a href="https://www.clovisvt.com/" target="_blank" rel="noopener noreferrer" aria-label="Clovis Vinant-Tang's Website" className="text-[#60a5fa] hover:text-[#5eead4] transition-colors">
            <Globe size={28} />
          </a>
          {/* Placeholder for potential GitHub Link
          <a href="YOUR_GITHUB_LINK_HERE" target="_blank" rel="noopener noreferrer" aria-label="Framework Zero on GitHub" className="text-[#60a5fa] hover:text-[#5eead4] transition-colors">
            <Github size={28} />
          </a>
          */}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8 border border-[#0c275a] bg-[#05112a]/95 backdrop-blur-md rounded-md mt-4 relative z-10 shadow-blue">
        <h1 className="text-5xl font-bold text-center mb-4 text-white tracking-wider glow-text">Framework Zero</h1>

        {/* Tagline in a box */}
        <div className="text-center my-6">
          <div className="inline-block border-2 border-[#5eead4] px-6 py-3 rounded-lg shadow-lg" style={{ boxShadow: '0 0 15px rgba(94, 234, 212, 0.5), inset 0 0 10px rgba(94, 234, 212, 0.3)' }}>
            <h2 className="text-xl sm:text-2xl font-light text-[#5eead4] tracking-wide">
              Leveling Up Vibe Coders To Vibe CEOs!
            </h2>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center my-10">
          <Button
            label="GET INVOLVED"
            variant="accent"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAms8ENSZhoMYtZ0Q-Iv341s_On_lYkvQF5qC5BXbFdEUe8Q/viewform"
            className="px-10 py-4 text-lg tracking-widest font-semibold"
          />
        </div>

        {/* Main Descriptive Text */}
        <p className="mb-6 leading-relaxed text-md sm:text-lg">
          Framework Zero empowers solo entrepreneurs and small teams by transforming complex company operations into an intuitive, gamified experience. We're your AI co-pilot, helping you level up from Vibe Coder to Vibe CEO.
        </p>
        <p className="mb-6 leading-relaxed text-md sm:text-lg">
          Tired of juggling a flood of AI tools? We simplify AI adoption and management with an AI app orchestrator that grows with you. Imagine running your company like a video game – engaging, empowering, and results-driven.
        </p>
        <p className="mb-10 leading-relaxed text-md sm:text-lg">
          Our vision is to build the infrastructure for the AI-Economy: a future of "Infinite Companies, Infinite Creation," enabling millions of AI-run micro-firms where human preferences are seamlessly integrated. We're starting by making AI effortless for solopreneurs.
        </p>

        {/* Who We Are Section */}
        <div className="mt-16 pt-10 border-t border-[#0c275a]/70">
          <h3 className="text-3xl font-bold text-center mb-10 text-white tracking-wider glow-text">Who We Are</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#5eead4] mb-2">Clovis Vinant-Tang</h4>
              <p className="text-md text-gray-300 mb-3 italic">"Grand Stratego"</p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                With 5+ years in satellite network planning, Clovis brings expertise in complex systems. Background in Physics & Economics from McGill University. A sci-fi galaxy brain, passionate about building the future.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#5eead4] mb-2">Connie Li</h4>
              <p className="text-md text-gray-300 mb-3 italic">"RPG Princess"</p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                A 10+ year veteran as a Tumblr engineering lead, Connie excels in user-centric design and scaling platforms. Holds an Economics degree from Princeton University. Meme culture connoisseur and expert in digital engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Location and Contact Section */}
        <div className="mt-16 pt-10 border-t border-[#0c275a]/70 text-center">
          <div className="text-[#5eead4]/70 text-sm mb-6 tracking-widest">BASED IN SAN FRANCISCO</div>
          <div className="flex flex-col items-center gap-4 text-sm tracking-wider">
            <a href="mailto:clovis@framework-zero.com" className="text-[#60a5fa] hover:text-[#5eead4]/80 transition-colors inline-flex items-center justify-center group">
              <Mail size={20} className="mr-2 transition-colors group-hover:text-[#5eead4]" />
              <span className="text-[#5eead4]">[</span> REACH OUT: clovis@framework-zero.com <span className="text-[#5eead4]">]</span>
            </a>
          </div>
          <div className="text-xs text-gray-500 mt-10">
            &copy; {new Date().getFullYear()} Framework Zero
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```