import api from "../services/api";
import { useEffect, useState } from "react";

interface Agent {
  uuid: number;
  displayName: string;
  displayIcon: string;
}

const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get("/agents");
        setAgents(response.data.data);
        console.log("Requisicao foi um sucesso!");
      } catch (error) {
        console.log("Erro na requisicao" + error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <>
      <div>
        <ul>
          {agents.map((agent) => (
            <li key={agent.uuid}>
              <p>{agent.displayName}</p>
              <img
                src={agent.displayIcon}
                alt="Imagem do Agente"
                width={150}
                height={150}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Agents;
