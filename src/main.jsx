import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./shared/contexts/ThemeContext";
import { ToastProvider } from "./shared/contexts/ToastContext";
import "./index.css";
import "./shared/styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </ThemeProvider>
);