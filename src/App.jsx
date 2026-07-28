import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./layouts/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;