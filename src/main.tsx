import ReactDOM from "react-dom/client";
import { FinishGameProvider } from "./context/index.ts";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import GlobalStyle from "./globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <FinishGameProvider>
      <GlobalStyle />
      <App />
    </FinishGameProvider>
  </BrowserRouter>
);
