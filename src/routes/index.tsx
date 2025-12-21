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

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/weapons" element={<WeaponsPage />} />
        <Route path="/weapons/:uuid" element={<Weapon />} />

        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:uuid" element={<Agent />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
