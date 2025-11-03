import { Route, Routes } from "react-router-dom";

import WeaponsPage from "./pages/WeaponsPage";
import Home from "./pages/Home";
import AgentsPage from "./pages/AgentsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weapons" element={<WeaponsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
