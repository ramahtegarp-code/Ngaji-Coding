
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
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show manual prompt for iOS or if already loaded
    const timer = setTimeout(() => {
      if (!deferredPrompt && !isIOSDevice) {
        setShowInstallPrompt(true);
      } else if (isIOSDevice) {
        setShowInstallPrompt(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
        setDeferredPrompt(null);
      }
    } else {
      // Manual fallback: Scroll to instructions or show alert
      const element = document.getElementById('install');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setShowInstallPrompt(false);
      } else {
        alert("Untuk menginstal: Klik ikon titik tiga (⋮) di Chrome lalu pilih 'Instal Aplikasi', atau klik 'Add to Home Screen' di Safari.");
      }
    }
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

        {showInstallPrompt && (
          <div className="fixed bottom-24 left-6 right-6 md:left-6 md:right-auto z-50 animate-in slide-in-from-bottom-10 duration-500">
            <div className="bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col space-y-3 max-w-sm mx-auto md:mx-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl text-primary font-bold">N</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Pasang Ngaji Coding</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Belajar lebih cepat & tanpa browser</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={handleInstallClick}
                  className="flex-1 bg-primary text-white font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all active:scale-95"
                >
                  <span className="text-xs">{deferredPrompt ? 'Instal Otomatis' : 'Lihat Cara Instal'}</span>
                </button>
                <button 
                  onClick={() => setShowInstallPrompt(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:bg-slate-100 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
