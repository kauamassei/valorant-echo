/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/useAuth";

import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import TrainingSessionCard from "./TrainingSessionCard";
import api from "../../services/api";
import Footer from "../Footer";

interface TrainingSession {
  id: number;
  dayLabel: string;
  focus: string;
  durationMinutes: number;
}

interface TrainingPlan {
  id: number;
  title: string;
  trainingProfile: {
    rank: string;
    role: string;
    goal: string;
  };
  sessions: TrainingSession[];
}

const TrainingPage = () => {
  const { isLoggedIn } = useAuth();
  const logged = isLoggedIn();
  const navigate = useNavigate();

  const [plans, setPlans] = useState<TrainingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔒 USUÁRIO NÃO LOGADO
  if (!logged) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#070B12] flex items-center justify-center px-4 pt-24">
          <div className="w-full max-w-sm bg-[#0f172a] border border-gray-700 rounded-xl px-6 py-5 text-center shadow-md">
            <h1 className="text-white text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              Acesso restrito <span>🔒</span>
            </h1>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Faça login para acessar o sistema de treinamento personalizado do
              Valorant Echo.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-[#F96666] hover:bg-[#f08d8d] transition-colors text-white py-2.5 rounded-lg font-medium"
            >
              Ir para login
            </button>
          </div>
        </main>
      </>
    );
  }

  // 🔁 BUSCA DOS TREINOS
  useEffect(() => {
    async function fetchTraining() {
      try {
        const response = await api.get("/training");
        setPlans(response.data);
      } catch (error) {
        console.error("Erro ao buscar treino", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTraining();
  }, []);

  const hasTraining = plans.length > 0;

  // 🗑️ CONFIRMAÇÃO DE DELETE
  async function confirmDeleteTraining(planId: number) {
    try {
      await api.delete(`/training/${planId}`);

      setPlans((prev) => prev.filter((plan) => plan.id !== planId));

      toast.success("Plano de treino apagado com sucesso");
    } catch (error) {
      console.error("Erro ao apagar treino", error);
      toast.error("Erro ao apagar o treino");
    }
  }

  function handleDeleteTraining(planId: number) {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-white">
            Tem certeza que deseja apagar este plano de treino?
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={closeToast}
              className="px-3 py-1 rounded bg-gray-600 text-sm"
            >
              Cancelar
            </button>

            <button
              onClick={() => {
                confirmDeleteTraining(planId);
                closeToast();
              }}
              className="px-3 py-1 rounded bg-red-600 text-sm"
            >
              Apagar
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        className: "bg-[#0f172a] border border-gray-700",
      }
    );
  }

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-[#070b12] text-white pt-20">
        <Sidebar />

        <main className="flex-1 px-4 py-8 md:px-8">
          {loading && <p className="text-gray-400">Carregando treino...</p>}

          {!loading && !hasTraining && (
            <div className="flex flex-col items-center justify-center mt-20 text-center">
              <h1 className="text-2xl font-bold mb-3">
                Você ainda não possui um plano de treino
              </h1>

              <p className="text-gray-400 mb-6 max-w-md">
                Crie seu primeiro plano personalizado com base no seu rank,
                função e objetivos no Valorant.
              </p>

              <button
                onClick={() => navigate("/dashboard/stepper")}
                className="bg-[#F96666] hover:bg-[#ff9292] transition px-6 py-3 rounded-lg font-semibold"
              >
                Criar novo treino
              </button>
            </div>
          )}

          {!loading &&
            hasTraining &&
            plans.map((plan) => (
              <section key={plan.id} className="mb-12 max-w-5xl">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl font-bold">{plan.title}</h1>

                  {/* BOTÕES DESKTOP */}
                  <div className="hidden md:flex gap-3">
                    <button
                      onClick={() => navigate("/dashboard/stepper")}
                      className="bg-gray-600 hover:bg-gray-700 transition px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Novo treino
                    </button>

                    <button
                      onClick={() => handleDeleteTraining(plan.id)}
                      className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Apagar treino
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-6">
                  Rank: {plan.trainingProfile.rank} • Função:{" "}
                  {plan.trainingProfile.role} • Objetivo:{" "}
                  {plan.trainingProfile.goal.replace("_", " ")}
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {plan.sessions.map((session) => (
                    <TrainingSessionCard
                      key={session.id}
                      dayLabel={session.dayLabel}
                      focus={session.focus}
                      durationMinutes={session.durationMinutes}
                    />
                  ))}
                </div>

                {/* BOTÕES MOBILE */}
                <div className="mt-6 flex flex-col gap-3 md:hidden">
                  <button
                    onClick={() => navigate("/dashboard/stepper")}
                    className="bg-gray-600 hover:bg-gray-700 transition px-4 py-3 w-full rounded-lg font-semibold"
                  >
                    Novo treino
                  </button>

                  <button
                    onClick={() => handleDeleteTraining(plan.id)}
                    className="bg-red-700 hover:bg-red-800 transition px-4 py-3 rounded-lg font-semibold"
                  >
                    Apagar treino
                  </button>
                </div>
              </section>
            ))}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default TrainingPage;
