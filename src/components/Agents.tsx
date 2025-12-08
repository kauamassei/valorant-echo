import api from "../services/api";
import { useEffect, useState } from "react";

interface Agent {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullPortrait: string;
  background: string;
}

const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get("/agents");
        setAgents(response.data.data);
        console.log("Requisição foi um sucesso!");
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 bg-[#070B12]">
      {agents.map((agent) => (
        <div
          key={agent.uuid}
          className="relative group grid h-128 w-full max-w-104 items-end justify-center overflow-hidden 
                     text-center rounded-xl shadow-lg bg-gray-900 hover:bg-[#F96666] transition-all duration-300 ease-out  mx-auto"
        >
          {/* Background com hover (scale) */}
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center 
                       transition-all duration-300 ease-out 
                       group-hover:scale-110"
            style={{
              backgroundImage: `url(${agent.fullPortrait || agent.displayIcon})`,
            }}
          />

         
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50" />

          {/* Conteúdo */}
          <div className="relative py-10 px-6 md:px-8">
            <h2 className="mb-4 text-3xl font-medium text-white font-tungsten">
              {agent.displayName}
            </h2>

            <img
              src={agent.displayIcon}
              alt={agent.displayName}
              className="mx-auto h-20 w-20 rounded-full border-2 border-[#2b2841] object-cover shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agents;
