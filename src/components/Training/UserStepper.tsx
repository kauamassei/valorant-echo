import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper, { Step } from "../../ui/Stepper";
import { createTrainingPlan } from "../../services/trainingApi";

const ranks = [
  { label: "Ferro", value: "ferro" },
  { label: "Bronze", value: "bronze" },
  { label: "Prata", value: "prata" },
  { label: "Ouro", value: "ouro" },
  { label: "Platina", value: "platina" },
  { label: "Diamante", value: "diamante" },
  { label: "Ascendente", value: "ascendente" },
  { label: "Imortal", value: "imortal" },
  { label: "Radiante", value: "radiante" },
];

const roles = [
  { label: "Duelista", value: "duelista" },
  { label: "Iniciador", value: "iniciador" },
  { label: "Controlador", value: "controlador" },
  { label: "Sentinela", value: "sentinela" },
];

const objectives = [
  { label: "Melhorar mecânica", value: "melhorar_mecanica" },
  { label: "Melhorar mira", value: "melhorar_mira" },
  { label: "Noção de jogo", value: "nocao_de_jogo" },
  { label: "Posicionamento", value: "posicionamento" },
  { label: "Comunicação em equipe", value: "comunicacao" },
  { label: "Subir de rank", value: "subir_rank" },
];

const UserStepper = () => {
  const [rank, setRank] = useState("");
  const [role, setRole] = useState("");
  const [objective, setObjective] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleCreateTraining() {
    try {
      setLoading(true);

      await createTrainingPlan({
        rank,
        role,
        goal: objective,
      });

      navigate("/dashboard/training");
    } catch (error) {
      console.error("Erro ao criar treino", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="text-white">
      <Stepper
        initialStep={1}
        onFinalStepCompleted={handleCreateTraining}
        backButtonText="Voltar"
        nextButtonText="Continuar"
      >
        <Step>
          <h2 className="text-2xl font-bold mb-2">
            Bem-vindo à sessão de treinamento Echo🕹️
          </h2>
          <p className="text-gray-300">
            Responda algumas perguntas para criarmos um treino personalizado
            para você no Valorant.
          </p>
        </Step>

        <Step>
          <h2 className="mb-4 text-xl font-semibold">
            Qual é o seu rank atual?
          </h2>

          <div className="flex flex-wrap gap-2">
            {ranks.map((r) => (
              <button
                key={r.value}
                onClick={() => setRank(r.value)}
                className={`border px-4 py-2 rounded-2xl transition-all
                  ${
                    rank === r.value
                      ? "bg-[#F96666] border-[#F96666]"
                      : "border-gray-500 hover:bg-[#686868]"
                  }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </Step>

        <Step>
          <h2 className="mb-4 text-xl font-semibold">
            Qual função você mais joga?
          </h2>

          <div className="flex flex-wrap gap-3">
            {roles.map((r) => (
              <button
                key={r.value}
                onClick={() => setRole(r.value)}
                className={`border px-4 py-2 rounded-2xl transition-all
                  ${
                    role === r.value
                      ? "bg-[#F96666] border-[#F96666]"
                      : "border-gray-500 hover:bg-[#686868]"
                  }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </Step>

        <Step>
          <h2 className="mb-4 text-xl font-semibold">
            Qual é o seu principal objetivo?
          </h2>

          <div className="flex flex-wrap gap-3">
            {objectives.map((obj) => (
              <button
                key={obj.value}
                onClick={() => setObjective(obj.value)}
                className={`border px-4 py-2 rounded-2xl transition-all
                  ${
                    objective === obj.value
                      ? "bg-[#F96666] border-[#F96666]"
                      : "border-gray-500 hover:bg-[#686868]"
                  }`}
              >
                {obj.label}
              </button>
            ))}
          </div>
        </Step>

        <Step>
          <h2 className="text-2xl font-bold mb-3">Tudo pronto!</h2>

          <ul className="text-gray-200 list-disc list-inside space-y-1">
            <li><strong>Rank:</strong> {rank}</li>
            <li><strong>Função:</strong> {role}</li>
            <li><strong>Objetivo:</strong> {objective}</li>
          </ul>

          {loading && (
            <div className="mt-6 flex items-center gap-2 text-gray-400">
              <span className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full" />
              Gerando seu plano de treino...
            </div>
          )}
        </Step>
      </Stepper>
    </div>
  );
};

export default UserStepper;
