import { Route, Routes } from "react-router-dom";
import WeaponsPage from "./pages/WeaponsPage";

import Home from "./pages/Home";
import AgentsPage from "./pages/AgentsPage";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weapons" element={<WeaponsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
