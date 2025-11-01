import { Route, Routes} from "react-router-dom";
import WeaponsPage from "./pages/WeaponsPage";

import Home from "./pages/Home";

function App() {
  return (
    <>


      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weapons" element={<WeaponsPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
