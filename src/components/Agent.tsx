import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

interface AgenteSetup {
  uuid: string;
  displayName: string;
  description: string;
  fullPortrait: string;
  background: string;
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
      <div className="p-4">
        <img src={agent.fullPortrait} alt="Reyna full body" />

        <div className="">
          {agent.displayName}
          {agent.description}
        </div>
      </div>
    </>
  );
};

export default Agent;
