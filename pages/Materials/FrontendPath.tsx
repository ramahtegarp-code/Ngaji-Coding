
import React from 'react';
import { Link } from 'react-router-dom';

const FrontendPath: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto animate-in fade-in duration-500">
      <Link to="/materi" className="text-primary font-bold flex items-center mb-8 hover:underline group">
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Dashboard
      </Link>
      
      <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Frontend" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-12">
          <div>
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Web Track</span>
            <h1 className="text-5xl font-black text-white">Materi Web Frontend</h1>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Filosofi Arsitektur Web</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Frontend adalah wajah dari sebuah aplikasi. Jika diibaratkan membangun sebuah Masjid, HTML adalah struktur bangunannya, CSS adalah ornamen dan catnya, sementara JavaScript adalah sistem pencahayaan dan pintunya yang bisa terbuka otomatis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mr-3 font-mono">01</span>
              HTML5: Struktur Dasar
            </h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Pahami anatomi dokumen web yang benar agar mesin pencari (SEO) menyukai karya Anda.</p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Semantic Elements (header, main, footer)</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Forms & Input Validation</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Accessibility (Aria Labels)</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-3 font-mono">02</span>
              Modern CSS & Tailwind
            </h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Pelajari cara mendesain tampilan yang memukau dan responsif di semua perangkat (HP, Tablet, Desktop).</p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Flexbox & CSS Grid</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Tailwind Utility Classes</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Animations & Glassmorphism</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-yellow-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mr-3 font-mono">03</span>
              JavaScript: Logika Hidup
            </h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Berikan nyawa pada website Anda dengan interaktivitas yang cerdas dan pengambilan data secara real-time.</p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span> Array & Object Manipulation</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span> Asynchronous JS (Async/Await)</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span> API Integration with Fetch</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mr-3 font-mono">04</span>
              React: Component Era
            </h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Standar industri modern. Membangun aplikasi web yang cepat, scalable, dan mudah dikelola.</p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span> Functional Components</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span> Hooks (useState, useEffect, useContext)</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span> Single Page Application Routing</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Unduh Silabus Lengkap</h3>
            <p className="text-white/80 mb-10 text-lg">Dapatkan PDF panduan belajar mandiri yang berisi roadmap, daftar resource gratis, dan latihan proyek mingguan.</p>
            <button className="bg-white text-primary font-bold px-12 py-5 rounded-2xl shadow-xl hover:bg-slate-100 transition-all flex items-center mx-auto space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>Download Silabus (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendPath;
