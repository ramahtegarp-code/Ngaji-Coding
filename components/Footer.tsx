
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Ngaji Coding</h3>
          <p className="text-sm leading-relaxed">
            Media belajar coding dari dasar hingga lanjut, mengintegrasikan nilai edukasi pesantren dan teknologi masa depan.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#/" className="hover:text-primary transition-colors">Beranda</a></li>
            <li><a href="#/tujuan" className="hover:text-primary transition-colors">Tujuan</a></li>
            <li><a href="#/founder" className="hover:text-primary transition-colors">Founder</a></li>
            <li><a href="#/materi" className="hover:text-primary transition-colors">Materi Coding</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Komunitas</h4>
          <p className="text-sm mb-2">UKM Coding Ma’had Aly Andalusia</p>
          <p className="text-xs opacity-60 italic">"Membangun Peradaban Digital dari Pesantren"</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} NgajiCoding.com - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
