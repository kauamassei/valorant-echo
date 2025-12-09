import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

interface AgenteSetup {
  uuid: string;
  displayName: string;
  description: string;
  fullPortrait: string;
  abilities: [];
}

const Agent = () => {
  const [agent, setAgent] = useState<AgenteSetup | null>(null);
  const { uuid } = useParams();

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const response = await api.get(`/agents/${uuid}`);
        setAgent(response.data.data);
        console.log("Requisição foi um sucesso!");
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };

    fetchAgent();
  }, []);

  if (!agent) return <p>Carregando...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#070B12] min-h-screen">
        <div className="flex">
          <img
            src={agent.fullPortrait}
            alt="Reyna full body"
            className="w-180 flex items-start"
          />

          <div className="text-white items-center justify-center">
            {agent.displayName}
            {agent.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agent;
