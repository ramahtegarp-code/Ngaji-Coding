
import React from 'react';
import { Link } from 'react-router-dom';

const PythonPath: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto animate-in fade-in duration-500">
      <Link to="/materi" className="text-primary font-bold flex items-center mb-8 hover:underline">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Dashboard
      </Link>
      
      <div className="relative h-64 rounded-3xl overflow-hidden mb-12 shadow-xl">
        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Python" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
          <h1 className="text-4xl font-extrabold text-white">Python & AI Fundamentals</h1>
        </div>
      </div>

      <div className="prose prose-slate max-w-none mb-12">
        <h2 className="text-2xl font-bold text-slate-900">Kenapa Memilih Python?</h2>
        <p className="text-slate-600">Python adalah bahasa pemrograman yang didesain untuk keterbacaan. Ini sangat cocok untuk santri karena sintaksnya menyerupai bahasa manusia yang logis.</p>
      </div>

      <div className="space-y-6">
        {[
          { title: "Level 1: Dasar Logika", desc: "Belajar tentang variabel, tipe data, dan alur kontrol (if-else, loops). Proyek: Tebak Angka Digital." },
          { title: "Level 2: Data & Function", desc: "Memahami list, dictionary, tuple, dan cara membuat fungsi yang reusable (ijtihad kode)." },
          { title: "Level 3: Otomatisasi", desc: "Menggunakan Python untuk mengolah ribuan data Excel atau scraping website berita." },
          { title: "Level 4: Intro to AI", desc: "Mengenal library dasar seperti NumPy dan Pandas untuk analisis data digital." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border-l-4 border-yellow-500 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonPath;
