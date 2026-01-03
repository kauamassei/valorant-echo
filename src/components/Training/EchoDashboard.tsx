import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import Navbar from "../Navbar";
import UserStepper from "./UserStepper";
import TrainingPage from "./TrainingPage";

const EchoDashboard = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const logged = isLoggedIn();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#070B12] flex items-center justify-center px-4 pt-2">
        {!logged ? (
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
        ) : (
          <div className="w-full max-w-4xl">
            <Routes>
              <Route index element={<UserStepper />} />
              <Route path="training" element={<TrainingPage />} />
            </Routes>
          </div>
        )}
      </main>
    </>
  );
};

export default EchoDashboard;
