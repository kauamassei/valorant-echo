import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

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
        console.log("Requisição foi um sucesso!");
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };

    fetchAgent();
  }, [uuid]);

  if (!agent) return <p>Carregando...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#070B12] min-h-screen">
        <div className="flex flex-col">
          <div className="w-180 flex items-start">
            <img src={agent.fullPortrait} alt={agent.displayName} />
          </div>

          <div className="text-white flex justify-end w-full">
            <h1 className="font-['Bebas_Neue'] tracking-tight text-6xl uppercase">
              {agent.displayName}
            </h1>
            <p>{agent.description}</p>
          </div>

          <div className="text-white justify-center items-center mt-8 grid grid-cols-4">
            {agent.abilities.map((ab) => (
              <div className="w-70 h-80 flex flex-col items-center bg-[#1e2125] p-6 gap-2 rounded-xl">
                <img src={ab.displayIcon} alt="" width={50} />
                <h3 className="font-semibold">{ab.displayName}</h3>
                <p>{ab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agent;
