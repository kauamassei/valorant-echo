import { UserProvider } from "./contexts/useAuth";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toast.css";

import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
       <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
