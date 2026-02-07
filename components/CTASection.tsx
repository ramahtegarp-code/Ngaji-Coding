
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white rounded-3xl mx-4 my-12 shadow-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
          Ayo Jadi Bagian dari Revolusi Digital Pesantren!
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Bergabunglah dengan <span className="font-bold underline">UKM Coding Ma’had Aly Andalusia</span>. 
          Asah skill-mu, bangun proyek nyata, dan jadilah santri masa depan yang melek teknologi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <div className="text-3xl mb-2">👨‍🏫</div>
            <h4 className="font-bold text-lg">Mentoring</h4>
            <p className="text-sm opacity-80">Bimbingan intensif dari para ahli di bidang IT.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <div className="text-3xl mb-2">💻</div>
            <h4 className="font-bold text-lg">Proyek Nyata</h4>
            <p className="text-sm opacity-80">Membangun website & aplikasi bermanfaat.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-bold text-lg">Komunitas</h4>
            <p className="text-sm opacity-80">Lingkungan belajar yang suportif & inklusif.</p>
          </div>
        </div>
        <button className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
};

export default CTASection;
