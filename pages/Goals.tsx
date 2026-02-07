
import React from 'react';

const Goals: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-700">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Tujuan Utama Kami</h1>
        <p className="text-slate-600 text-lg">Misi besar untuk menciptakan ekosistem digital yang berintegritas.</p>
      </div>

      <div className="space-y-12">
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-primary text-white p-2 rounded-lg">🎯</span>
            <h2 className="text-2xl font-bold text-slate-800">Tujuan Edukatif</h2>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-primary mr-2">✔</span>
              <span>Meningkatkan literasi digital di lingkungan pesantren dan pendidikan formal.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✔</span>
              <span>Menyediakan modul pembelajaran coding yang aksesibel bagi mereka yang tidak memiliki latar belakang IT.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✔</span>
              <span>Membentuk pola pikir (mindset) computational thinking untuk pemecahan masalah kompleks.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-secondary text-white p-2 rounded-lg">🚀</span>
            <h2 className="text-2xl font-bold text-slate-800">Tujuan Praktis</h2>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-secondary mr-2">✔</span>
              <span>Membekali peserta dengan keterampilan teknis (hard skills) yang siap pakai di dunia kerja.</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✔</span>
              <span>Mengajarkan pembuatan website dan aplikasi mobile dari tahap ide hingga deployment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✔</span>
              <span>Mendorong kemandirian ekonomi santri melalui freelance atau pengembangan startup digital.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-dark text-white p-2 rounded-lg">⭐</span>
            <h2 className="text-2xl font-bold text-slate-800">Tujuan Jangka Panjang</h2>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-slate-800 mr-2">✔</span>
              <span>Mencetak talenta digital (Digital Talent) unggulan dari kalangan pesantren di seluruh Indonesia.</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-800 mr-2">✔</span>
              <span>Menjadi pusat rujukan pembelajaran IT yang tetap menjunjung tinggi nilai-nilai akhlakul karimah.</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-800 mr-2">✔</span>
              <span>Membangun jaringan profesional IT yang berlatar belakang santri untuk saling berkolaborasi.</span>
            </li>
          </ul>
        </section>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Siapa Target Pengguna Kami?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Pelajar Umum', 'Mahasantri', 'Santri Pesantren', 'Pemula Dunia IT'].map((target) => (
              <div key={target} className="bg-slate-50 border-2 border-dashed border-slate-200 p-6 rounded-2xl text-center">
                <p className="font-semibold text-slate-700">{target}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
