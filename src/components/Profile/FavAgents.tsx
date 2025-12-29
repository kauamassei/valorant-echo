/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import api from "../../services/api";
import apiGame from "../../services/apiGame";

interface Agent {
  uuid: string;
  displayName: string;
  displayIcon: string;
}

const FavAgents = () => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const { data } = await api.get("/favorites/agent");
        const uuids = data.favorites.map((f: any) => f.agentUuid);

        setFavoriteUuids(uuids);

        const agentsRes = await apiGame.get("/agents?isPlayableCharacter=true");

        setAgents(
          agentsRes.data.data.filter((agent: Agent) =>
            uuids.includes(agent.uuid)
          )
        );
      } catch (error) {
        console.error("Erro ao carregar agentes favoritos", error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  if (loading) {
    return <p className="text-zinc-400">Carregando agentes favoritos...</p>;
  }

  // ✅ AGORA o state está sendo usado aqui
  if (favoriteUuids.length === 0) {
    return (
      <p className="text-zinc-400 mt-4">
        Você ainda não favoritou nenhum agente
      </p>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-white mb-4">
        Agentes favoritos
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {agents.map(agent => (
          <div
            key={agent.uuid}
            className="
              flex flex-col items-center text-center
              rounded-xl
              bg-[#0F1624]
              border border-white/5
              p-4
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30
            "
          >
            <img
              src={agent.displayIcon}
              alt={agent.displayName}
              className="
                w-16 h-16
                rounded-lg
                mb-2
                transition-transform duration-200
                hover:scale-105
              "
            />

            <span className="text-sm font-medium text-zinc-200">
              {agent.displayName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavAgents;
