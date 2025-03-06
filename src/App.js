import React, { useState } from 'react';
import { Network, ArrowRight, Mail, Users, Globe, Database, Brain } from 'lucide-react';

const Button = ({ 
  icon, 
  label, 
  onClick, 
  variant = 'secondary',
  className = '',
  href = ''
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20',
    accent: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
  };

  return (
    <a
      href={href}
      target={href.startsWith('#') ? '' : "_blank"}
      rel={href.startsWith('#') ? '' : "noopener"}
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${variants[variant]} ${className}`}
    >
      {icon}
      {label}
    </a>
  );
};

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setLoading(true);
    
    // Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxD43BeWrqVObsnmh0X5iwz1FzCRFMFaauGVnlQqZsHPbU7IlM23M0XjWevYTHdRflG/exec';
    
    // Use the direct form submission approach only
    // This is more reliable with Google Apps Script
    submitViaForm(scriptURL, email);
  };
  
  // Function to submit via form (more reliable with Google Apps Script)
  const submitViaForm = (url, email) => {
    console.log('Submitting via form to URL:', url);
    console.log('Email being submitted:', email);
    
    // Use the simplest possible form submission approach
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.style.display = 'none'; // Hide the form
    
    // Create hidden input for email - this is the critical part
    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email'; // This name must match what the Google Script expects
    emailInput.value = email;
    form.appendChild(emailInput);
    
    // Add timestamp
    const timestampInput = document.createElement('input');
    timestampInput.type = 'hidden';
    timestampInput.name = 'timestamp';
    timestampInput.value = new Date().toISOString();
    form.appendChild(timestampInput);
    
    // Append form to body
    document.body.appendChild(form);
    
    // Submit the form directly - no window or iframe
    console.log('Submitting form with email:', emailInput.value);
    form.submit();
    console.log('Form submitted directly');
    
    // Show success message after a delay
    setTimeout(() => {
      document.body.removeChild(form);
      setSubmitted(true);
      setLoading(false);
      console.log('Showing success message');
    }, 2000);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-blue-900/50 to-purple-900">
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-7 h-7 text-blue-400" />
            <span className="text-xl font-semibold text-white">Framework Zero</span>
          </div>
        </header>
        
        {/* Hero Section */}
        <main className="flex-grow flex flex-col justify-center py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Framework for the <br/><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Post-Labor Economy</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Building autonomous systems that align AI productivity with human values through decentralized governance and preference aggregation.
            </p>
            
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex gap-4 flex-wrap justify-center">
                {/*
                <Button
                  icon={<Mail className="w-5 h-5" />}
                  label="Follow"
                  variant="primary"
                  href="#signup"
                  onClick={() => {
                    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
                  }}
                />
                */}
                <Button
                  icon={<Users className="w-5 h-5" />}
                  label="Get Involved"
                  variant="accent"
                  href="https://forms.gle/NrNJ2dynq5DVMRWUA"
                />
              </div>
            </div>
          </div>
        </main>

        {/* Solution Section */}
        <section id="solution" className="py-20 space-y-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: '🤝', title: 'Preference Aggregation', 
               desc: 'Researching methods to capture human preferences'},
              {icon: '🤖', title: 'Autonomous Companies', 
               desc: 'Exploring the future of autonomous organizations'},
              {icon: '🌐', title: 'Community & Connection', 
               desc: 'Building networks for collaboration and growth'}
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-xl backdrop-blur-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {/*
        <section id="signup" className="py-20 text-center">
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Research</h3>
            <p className="text-gray-300 mb-6">
              Be part of cutting-edge research into post-labor economics
            </p>
            
            {submitted ? (
              <div className="text-center py-4">
                <div className="text-emerald-400 text-xl mb-2">✓ Thank you for joining!</div>
                <p className="text-gray-300">We'll keep you updated on our progress.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xs mx-auto">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button
                  label={loading ? "Processing..." : "Follow"}
                  variant={loading ? "secondary" : "primary"}
                  className={`w-full ${loading ? 'opacity-75 cursor-wait' : ''}`}
                  onClick={handleSubmit}
                />
              </form>
            )}
          </div>
        </section>
        */}
      </div>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/70 to-black opacity-80"></div>
      </div>
    </div>
  );
}

export default App; 