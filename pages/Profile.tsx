
import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2000" 
            alt="Coding Lifestyle" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full animate-pulse uppercase">
            Platform Belajar Coding Santri No. 1
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
            NGAYAH<br/><span className="text-primary">NGODING</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Dari pesantren untuk peradaban. Kuasai teknologi masa depan dengan bimbingan terstruktur dan nilai-nilai luhur.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/materi" className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] transform hover:-translate-y-1 text-lg">
              Mulai Belajar Sekarang
            </Link>
          </div>
        </div>

        {/* Floating Code Snippet Visual */}
        <div className="absolute bottom-10 left-10 hidden lg:block bg-dark/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl rotate-3 opacity-50">
          <pre className="text-xs font-mono text-secondary">
            <code>{`function belajar() {
  const semangat = true;
  while(semangat) {
    ngaji();
    ngoding();
  }
}`}</code>
          </pre>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25"></div>
            <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl relative z-10" alt="Programmer at work" />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block z-20">
               <div className="text-4xl font-black text-primary mb-1">100%</div>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Kurikulum Santri-Friendly</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">Misi NgajiCoding.com</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Ngajicoding.com lahir dari kesadaran bahwa santri memiliki potensi luar biasa dalam logika dan disiplin. Kami mengonversi ketajaman dalam memahami kitab menjadi ketajaman dalam memahami sintaks.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Platform ini menyediakan kurikulum yang menjembatani bahasa pemrograman modern dengan filosofi belajar pesantren yang mendalam dan berkelanjutan.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-800">Ijtihad Digital</p>
                <p className="text-xs text-slate-500">Karya nyata untuk umat.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-800">Adab & Kode</p>
                <p className="text-xs text-slate-500">Etika dalam berteknologi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALL GUIDE SECTION - WAJIB ADA */}
      <section id="install" className="py-24 bg-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Cara Instal Aplikasi Ngaji Coding</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Nikmati pengalaman belajar yang lebih cepat dan lancar tanpa harus membuka browser setiap saat. Langsung muncul di menu HP Anda!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Android */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/50">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mb-8 text-3xl">🤖</div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Instal di Android (Chrome)</h3>
              <ol className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">1.</span>
                  <span>Buka <strong>ngajicoding.com</strong> di browser Chrome.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">2.</span>
                  <span>Klik tombol <strong>"Instal Aplikasi"</strong> yang muncul di layar, atau klik ikon titik tiga (⋮) di pojok kanan atas.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">3.</span>
                  <span>Pilih menu <strong>"Instal aplikasi"</strong> atau <strong>"Tambahkan ke Layar Utama"</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">4.</span>
                  <span>Klik <strong>"Instal"</strong>. Selesai! Aplikasi kini ada di daftar aplikasi HP Anda.</span>
                </li>
              </ol>
            </div>

            {/* iOS */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/50">
              <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-3xl flex items-center justify-center mb-8 text-3xl">🍎</div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Instal di iPhone (Safari)</h3>
              <ol className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">1.</span>
                  <span>Buka <strong>ngajicoding.com</strong> menggunakan browser Safari.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">2.</span>
                  <span>Klik tombol <strong>Share</strong> (ikon kotak dengan panah ke atas) di bagian bawah layar.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">3.</span>
                  <span>Gulir ke bawah dan pilih <strong>"Add to Home Screen"</strong> (Tambahkan ke Layar Utama).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">4.</span>
                  <span>Klik <strong>"Add"</strong> di pojok kanan atas. Aplikasi akan muncul di menu iPhone Anda.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-dark text-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pilar Utama Pembelajaran</h2>
          <p className="text-slate-400">Fondasi yang membuat Ngajicoding unggul dan berbeda.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Edukatif", icon: "📚", desc: "Materi disusun berjenjang sesuai kitab kuning (Mubtadi', Mutawassit, Mahir)." },
            { title: "Inklusif", icon: "🌍", desc: "Bahasa Indonesia yang membumi tanpa istilah teknis yang menakutkan." },
            { title: "Praktik", icon: "🛠️", desc: "Project-based learning: Belajar sambil membangun aplikasi nyata." },
            { title: "AI Enabled", icon: "🤖", desc: "Bantuan AI Tutor 24/7 untuk menjawab setiap kebuntuan kode Anda." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
