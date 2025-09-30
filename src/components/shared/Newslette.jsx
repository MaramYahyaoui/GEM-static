import React from 'react';

const Newslette = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 bg-white border-t border-b border-gray-300">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">ABONNEZ-VOUS À NOTRE NEWSLETTER</h2>
        <div className="flex justify-center gap-4 mt-12">
          <input
            type="email"
            placeholder="Saisir votre adresse e-mail"
            className="border border-gray-300 p-2 rounded-md w-64 focus:outline-none"
          />
          <button className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition">
            S'ABONNER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newslette;