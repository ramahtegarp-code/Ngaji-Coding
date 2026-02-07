
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CTASection from './components/CTASection';
import Profile from './pages/Profile';
import Goals from './pages/Goals';
import Founder from './pages/Founder';
import Materials from './pages/Materials';
import FrontendPath from './pages/Materials/FrontendPath';
import PythonPath from './pages/Materials/PythonPath';
import BackendPath from './pages/Materials/BackendPath';
import MobilePath from './pages/Materials/MobilePath';

const App: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can add to home screen
      setShowInstallBtn(true);
    });

    window.addEventListener('appinstalled', () => {
      setShowInstallBtn(false);
      setDeferredPrompt(null);
      console.log('PWA was installed');
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBtn(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-primary/30">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/tujuan" element={<Goals />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/materi" element={<Materials />} />
            <Route path="/materi/frontend" element={<FrontendPath />} />
            <Route path="/materi/python" element={<PythonPath />} />
            <Route path="/materi/backend" element={<BackendPath />} />
            <Route path="/materi/mobile" element={<MobilePath />} />
          </Routes>
          
          <CTASection />
        </main>

        {showInstallBtn && (
          <div className="fixed bottom-24 left-6 z-50 animate-bounce">
            <button 
              onClick={handleInstallClick}
              className="bg-secondary text-white font-bold px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>Instal Aplikasi</span>
            </button>
          </div>
        )}

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
