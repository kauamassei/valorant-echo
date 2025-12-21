import { motion } from "framer-motion";
import sageBackground from "../assets/sageBackground.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        {/* Wrapper com fundo para evitar tela branca */}
        <main className="min-h-screen bg-[#1c1c1c]">
          <div className="relative min-h-[90vh] bg-linear-to-b from-[#0f0f14] to-[#1c1c1c] overflow-hidden flex items-center">
            {/* Glow effects */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF7272] opacity-10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-red-600 opacity-10 rounded-full blur-[90px]" />
            <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-red-400 opacity-10 rounded-full blur-[80px]" />

            {/* Background image */}
            <img
              src={sageBackground}
              alt="Sage Background"
              className="absolute inset-0 w-full h-full object-cover object-[80%] opacity-30"
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white fade-up">
            <h1
  className="
    text-4xl md:text-6xl
    font-semibold
    tracking-wide
    uppercase
    mb-6
  "
>
  Prepare-se para{" "}
  <span
    className="
      bg-linear-to-r from-[#FF7272] to-red-500
      bg-clip-text text-transparent
      font-bold
      tracking-wider
    "
  >
    escolher seu lado
  </span>
</h1>


              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Personalize sua experiência e acompanhe sua evolução. Explore
                agentes, armas e estatísticas do Valorant em um só lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/categories"
                  className="bg-[#FF7272] hover:bg-[#ff5a5a] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-[#FF7272]/30"
                >
                  Echo
                </a>

                <a
                  href="/agents"
                  className="border border-[#FF7272] text-[#FF7272] hover:bg-[#FF7272] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  Iniciar
                </a>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default Home;
