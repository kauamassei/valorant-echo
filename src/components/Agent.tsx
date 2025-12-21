import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface AgenteSetup {
  uuid: string;
  displayName: string;
  description: string;
  fullPortrait: string;
  abilities: Ability[];
}

const Agent = () => {
  const [agent, setAgent] = useState<AgenteSetup | null>(null);
  const { uuid } = useParams();

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const response = await api.get(`/agents/${uuid}`);
        setAgent(response.data.data);
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };

    fetchAgent();
  }, [uuid]);

  if (!agent) return <p className="text-white p-6">Carregando...</p>;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-[#070B12] to-[#0c1220] text-white px-8 py-12 overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 relative"
          >
            <img
              src={agent.fullPortrait}
              alt={agent.displayName}
              className="w-[380px] lg:w-[520px] drop-shadow-[0_0_60px_rgba(255,70,85,0.15)]"
            />

       
            <div className="absolute inset-0 -z-10 blur-3xl bg-red-500/10 rounded-full" />
          </motion.div>

    
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl"
          >
            <h1 className="font-['Bebas_Neue'] text-6xl lg:text-8xl uppercase leading-none tracking-tight">
              {agent.displayName}
            </h1>

            <div className="h-1 w-24 bg-red-500 mt-4 mb-6" />

            <p className="text-gray-300 leading-relaxed text-lg">
              {agent.description}
            </p>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {agent.abilities.map((ab, index) => (
            <motion.div
              key={ab.slot}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e2125]/80 backdrop-blur rounded-xl p-6 flex flex-col items-center text-center gap-4
                         border border-white/5 hover:border-red-500/40 transition"
            >
              {ab.displayIcon && (
                <img
                  src={ab.displayIcon}
                  alt={ab.displayName}
                  className="w-14 h-14"
                />
              )}

              <h3 className="font-semibold text-lg uppercase tracking-wide">
                {ab.displayName}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {ab.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Agent;
