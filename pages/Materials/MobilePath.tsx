
import React from 'react';
import { Link } from 'react-router-dom';

const MobilePath: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto animate-in fade-in duration-500">
      <Link to="/materi" className="text-primary font-bold flex items-center mb-8 hover:underline">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Dashboard
      </Link>
      
      <div className="relative h-64 rounded-3xl overflow-hidden mb-12 shadow-xl">
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Mobile" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
          <h1 className="text-4xl font-extrabold text-white">Enterprise & Mobile Development</h1>
        </div>
      </div>

      <div className="space-y-12">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Jalur Pemrograman Sistem (C/C++)</h3>
          <p className="text-slate-600 mb-6">Mempelajari fundamental logika pemrograman tingkat rendah untuk memahami bagaimana hardware bekerja. Sangat direkomendasikan untuk membangun fondasi logika yang kuat.</p>
        </div>

        <div className="bg-indigo-900 text-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Mobile App dengan Java</h3>
          <p className="text-slate-300 mb-8">Bangun aplikasi Android Native yang tangguh dan berskala enterprise. Kurikulum ini mencakup:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">Architecture (MVC/MVVM)</div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">UI/UX Layouting</div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">External API Integration</div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">Local Database (Room)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePath;
