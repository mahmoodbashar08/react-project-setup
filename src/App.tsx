import "./App.css";
import { MainLayout } from "./components/Layout/MainLayout";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
