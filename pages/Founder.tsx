
import React from 'react';

const Founder: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrCc4JlzgGFulxneSObYyb59L-K8480BV0g&s" 
            alt="Ramah Tegar Pambudi" 
            className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Ramah Tegar Pambudi</h1>
          <p className="text-primary font-bold text-lg mb-6 uppercase tracking-widest">Founder Ngajicoding.com</p>
          
          <div className="prose prose-slate max-w-none mb-10">
            <p className="text-slate-600 text-lg leading-relaxed">
              Ramah Tegar Pambudi adalah seorang aktivis literasi dan teknologi yang memiliki kepedulian mendalam terhadap perkembangan pendidikan di lingkungan pesantren.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Memiliki latar belakang pendidikan santri yang kuat dikombinasikan dengan latar belakang akademik yang relevan, beliau mendedikasikan waktunya untuk menginisiasi gerakan "Coding for Santri". Fokus utamanya adalah mendemokratisasi akses teknologi agar dapat dinikmati oleh seluruh lapisan masyarakat, termasuk para mahasantri.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-semibold italic border-l-4 border-primary pl-4 my-8">
              "Ilmu pengetahuan adalah pelita, dan teknologi adalah kendaraan untuk menyebarkan cahaya tersebut lebih luas. Santri tidak boleh hanya menjadi konsumen teknologi, tapi harus menjadi penciptanya."
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Visi untuk Masa Depan</h3>
            <p className="text-slate-600 text-sm italic">
              "Saya bermimpi melihat ribuan aplikasi bermanfaat lahir dari tangan-tangan santri yang selama ini mungkin dianggap jauh dari dunia digital. Ngajicoding.com adalah langkah kecil menuju visi besar tersebut."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
