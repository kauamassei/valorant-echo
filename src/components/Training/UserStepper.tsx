import { useState } from "react";
import Stepper, { Step } from "../../ui/Stepper";

const ranks = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Diamante",
  "Ascendente",
  "Imortal",
  "Radiante",
];

const roles = ["Duelista", "Iniciador", "Controlador", "Sentinela"];

const objectives = [
  "Melhorar mecânica",
  "Melhorar mira",
  "Noção de jogo",
  "Posicionamento",
  "Comunicação em equipe",
  "Subir de rank",
];

const UserStepper = () => {
  const [rank, setRank] = useState("");
  const [role, setRole] = useState("");
  const [objective, setObjective] = useState("");

  return (
    <div className="text-white">
      <Stepper
        initialStep={1}
        onStepChange={(step) => console.log(step)}
        onFinalStepCompleted={() =>
          console.log({
            rank,
            role,
            objective,
          })
        }
        backButtonText="Voltar"
        nextButtonText="Continuar"
      >
        {/* STEP 1 */}
        <Step>
          <h2 className="text-2xl font-bold mb-2">
            Bem-vindo à sessão de treinamento Echo🕹️
          </h2>
          <p className="text-gray-300">
            Responda algumas perguntas para criarmos um treino personalizado
            para você no Valorant.
          </p>
        </Step>

        {/* STEP 2 - RANK */}
        <Step>
          <h2 className="mb-4 text-xl font-semibold">
            Qual é o seu rank atual?
          </h2>

          <div className="flex flex-wrap gap-2">
            {ranks.map((r) => (
              <button
                key={r}
                onClick={() => setRank(r)}
                className={`border border-gray-500 px-4 py-2 rounded-2xl transition-all duration-300
                  ${
                    rank === r
                      ? "bg-red-600 border-red-600"
                      : "hover:bg-[#686868]"
                  }`}
              >
                {r}
              </button>
            ))}
          </div>
        </Step>

        {/* STEP 3 - FUNÇÃO */}
        <Step>
          <h2 className="mb-4 text-xl font-semibold">
            Qual função você mais joga?
          </h2>

          <div className="flex gap-3 flex-wrap">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`border border-gray-500 px-4 py-2 rounded-2xl transition-all duration-300
                  ${
                    role === r
                      ? "bg-blue-600 border-blue-600"
                      : "hover:bg-[#686868]"
                  }`}
              >
                {r}
              </button>
            ))}
          </div>
        </Step>

        {/* STEP 4 - OBJETIVO */}
        <Step>
          <h2 className="mb-4 text-xl font-semibold">
            Qual é o seu principal objetivo?
          </h2>

          <div className="flex flex-wrap gap-3">
            {objectives.map((obj) => (
              <button
                key={obj}
                onClick={() => setObjective(obj)}
                className={`border border-gray-500 px-4 py-2 rounded-2xl transition-all duration-300
                  ${
                    objective === obj
                      ? "bg-green-600 border-green-600"
                      : "hover:bg-[#686868]"
                  }`}
              >
                {obj}
              </button>
            ))}
          </div>
        </Step>

        {/* STEP FINAL */}
        <Step>
          <h2 className="text-2xl font-bold mb-3">Tudo pronto!</h2>

          <p className="text-gray-300 mb-2">
            Com base nas suas respostas:
          </p>

          <ul className="text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Rank:</strong> {rank || "Não informado"}
            </li>
            <li>
              <strong>Função:</strong> {role || "Não informada"}
            </li>
            <li>
              <strong>Objetivo:</strong> {objective || "Não informado"}
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-400">
            Vamos montar um plano de treino focado exatamente nisso.
          </p>
        </Step>
      </Stepper>
    </div>
  );
};

export default UserStepper;
