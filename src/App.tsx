import { UserProvider } from "./contexts/useAuth";
import AppRoutes from "./routes";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
