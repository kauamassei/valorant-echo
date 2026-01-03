import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import WeaponsPage from "../pages/WeaponsPage";
import Home from "../pages/Home";
import AgentsPage from "../pages/AgentsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Agent from "../components/Agent";
import Profile from "../components/Profile/Profile";
import Weapon from "../components/Weapon";
import Nothing from "../components/Nothing";
import { ToastContainer } from "react-toastify";
import Maps from "../components/Maps";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
import MapInfo from "../components/MapInfo";

import TrainingStepper from "../components/Training/TrainingStepper";
import TrainingPage from "../components/Training/TrainingPage";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="bg-[#0B0F1A] border-l-4 border-[#FF4F4F] text-white font-bold rounded-lg text-center shadow-lg p-4"
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/nada" element={<Nothing />} />

          <Route path="/dashboard/training" element={<TrainingPage />} />
          <Route path="/dashboard/stepper" element={<TrainingStepper />} />

          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />

          <Route path="/maps" element={<Maps />} />
          <Route path="/maps/:uuid" element={<MapInfo />} />

          <Route path="/weapons" element={<WeaponsPage />} />
          <Route path="/weapons/:uuid" element={<Weapon />} />

          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agents/:uuid" element={<Agent />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;
