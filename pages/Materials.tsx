
import React from 'react';
import { Link } from 'react-router-dom';

const Materials: React.FC = () => {
  const paths = [
    {
      id: 'frontend',
      title: 'Web Frontend Mastery',
      icon: '🌐',
      color: 'from-blue-500 to-indigo-600',
      description: 'Kuasai HTML, CSS, dan JavaScript untuk membangun tampilan website yang modern dan responsif.',
      topics: ['HTML5 & Semantic UI', 'CSS3 & Tailwind', 'JavaScript ES6+', 'React.js'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'python',
      title: 'Python & AI Fundamentals',
      icon: '🐍',
      color: 'from-yellow-400 to-orange-500',
      description: 'Pelajari bahasa pemrograman paling populer untuk Data Science, AI, dan otomatisasi tugas harian.',
      topics: ['Logika Python', 'Data structures', 'Automation Scripts', 'Intro to AI'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'backend',
      title: 'Backend & Web Dinamis',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-600',
      description: 'Bangun otak di balik website menggunakan PHP dan SQL. Fokus pada keamanan dan pengolahan data.',
      topics: ['PHP 8.x', 'MySQL Database', 'REST API', 'Laravel Framework'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'mobile',
      title: 'Enterprise & Mobile App',
      icon: '📱',
      color: 'from-green-500 to-teal-600',
      description: 'Langkah lanjut untuk membangun aplikasi berskala besar menggunakan Java atau sistem rendah dengan C++.',
      topics: ['Java Enterprise', 'Android Native', 'C/C++ Logic', 'Data Structures'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Pilih Jalur Belajarmu</h1>
        <p className="text-slate-600 text-lg">Materi kami dirancang agar sistematis seperti kurikulum madrasah, membimbingmu selangkah demi selangkah.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paths.map((path) => (
          <div key={path.id} className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col sm:flex-row">
            <div className="sm:w-1/3 relative overflow-hidden">
              <img src={path.image} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt={path.title} />
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-40`}></div>
            </div>
            <div className="p-8 sm:w-2/3 flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{path.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{path.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {path.topics.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <Link 
                to={`/materi/${path.id}`} 
                className="inline-flex items-center justify-center bg-dark text-white font-bold py-3 rounded-2xl hover:bg-primary transition-colors group"
              >
                Mulai Belajar 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Pengetahuan Dasar Lainnya</h2>
            <div className="space-y-6">
               <div className="flex space-x-4">
                  <div className="bg-primary/20 p-3 rounded-2xl text-primary font-bold h-fit">Web</div>
                  <div>
                    <h4 className="font-bold text-lg">Struktur Dasar Website</h4>
                    <p className="text-slate-400 text-sm">Pelajari bagaimana Domain dan Hosting bekerja layaknya alamat rumah dan lahan tanah digital.</p>
                  </div>
               </div>
               <div className="flex space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-2xl text-secondary font-bold h-fit">CMS</div>
                  <div>
                    <h4 className="font-bold text-lg">Blogspot vs WordPress</h4>
                    <p className="text-slate-400 text-sm">Mana yang lebih cocok untuk dakwah digitalmu? Kami bahas tuntas perbandingannya.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl rotate-3" alt="Tech" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;
