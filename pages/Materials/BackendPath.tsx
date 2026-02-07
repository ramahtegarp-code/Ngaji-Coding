
import React from 'react';
import { Link } from 'react-router-dom';

const BackendPath: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto animate-in fade-in duration-500">
      <Link to="/materi" className="text-primary font-bold flex items-center mb-8 hover:underline">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Dashboard
      </Link>
      
      <div className="relative h-64 rounded-3xl overflow-hidden mb-12 shadow-xl">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Backend" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
          <h1 className="text-4xl font-extrabold text-white">Backend & Database</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-900 text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 text-primary">PHP Dasar hingga Lanjut</h3>
          <p className="text-slate-400 mb-8">PHP adalah bahasa yang menggerakkan sebagian besar web di dunia, termasuk WordPress dan sistem informasi pesantren.</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Pemrograman Berbasis Objek (OOP)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Manajemen Database dengan MySQL</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Keamanan Web (SQL Injection, XSS)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Pengembangan REST API</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Database Mastery</h3>
          <p className="text-slate-600 mb-8 text-sm">Data adalah amanah. Pelajari cara menyimpan, mengelola, dan mengambil data secara efisien menggunakan bahasa Query SQL.</p>
          <div className="flex flex-wrap gap-2">
            {['MySQL', 'PostgreSQL', 'Redis', 'Firebase'].map(db => (
              <span key={db} className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl font-bold text-xs">{db}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendPath;
