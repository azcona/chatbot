import React from "react";
import uc3mLogo from "../../assets/uc3m-logo.png";

const Landing = () => {
  const handleStartClick = () => {
    window.dispatchEvent(new Event("openEngibotChat"));
    document.getElementById("engibot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white font-body bg-[#0D0D1A]">

      <section className="bg-gray-100 py-6 px-4 flex justify-center items-center border-b border-gray-300">
        <img
          src={uc3mLogo}
          alt="Universidad Carlos III de Madrid"
          className="h-12 sm:h-16 object-contain"
        />
      </section>

      <section className="pt-12 pb-10 px-6 text-center bg-gradient-to-br from-gray-900 to-[#14142B]">
        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-600 mb-4 drop-shadow-lg">
          Bienvenido a ENGIBOT
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 mb-6">
          Tu asistente técnico inteligente 🤖 para estudiantes, makers y profesionales de la ingeniería en la Universidad Carlos III de Madrid.
        </p>
        <button
          onClick={handleStartClick}
          className="bg-pink-600 hover:bg-pink-700 focus:outline focus:ring-4 focus:ring-pink-300 text-white font-bold py-3 px-6 rounded-lg text-base shadow-md transition"
        >
          Empezar chat
        </button>
      </section>

      <section className="bg-[#1A1A30] px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-display text-pink-300 text-center mb-8">
          ¿Qué puede hacer?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-100 text-base md:text-lg max-w-5xl mx-auto">
          <div className="bg-[#222244] p-6 rounded-xl shadow-md border border-pink-500/30">
            🔧 Resuelve dudas en física, electrónica, programación o matemáticas. Explicaciones simples y al grano.
          </div>
          <div className="bg-[#222244] p-6 rounded-xl shadow-md border border-pink-500/30">
            💡 Genera ideas para proyectos técnicos, revisa código y sugiere mejoras. Siempre dispuesto a colaborar.
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1B1B3B] to-[#2B1C3F] px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-display text-amber-200 text-center mb-8">
          ¿Para quién es?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-100 text-base md:text-lg max-w-5xl mx-auto">
          <div className="bg-[#2B2B55] p-6 rounded-xl border border-white/10 shadow-inner">
            🎓 Estudiantes de ingeniería, informática y robótica que buscan una herramienta de estudio y consulta.
          </div>
          <div className="bg-[#2B2B55] p-6 rounded-xl border border-white/10 shadow-inner">
            🛠️ Makers y profesionales que necesitan respuestas rápidas en contextos reales o prácticos.
          </div>
        </div>
      </section>

      <footer className="bg-black py-10 text-center text-gray-500 text-sm">
        Creado por Mario Azcona — 2025
      </footer>
    </div>
  );
};

export default Landing;
