import { Route, Routes } from "react-router-dom";

import WeaponsPage from "../pages/WeaponsPage";
import Home from "../pages/Home";
import AgentsPage from "../pages/AgentsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Agent from "../components/Agent";
import Profile from "../components/Profile/Profile";


const AppRoutes = () => {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weapons" element={<WeaponsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agents/:uuid" element={<Agent />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />


          <Route path="/profile" element={<Profile />} />
        </Routes>


      </>
    </>
  );
};

export default AppRoutes;
