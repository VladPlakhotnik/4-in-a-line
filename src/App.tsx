import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound";
import { Rules } from "./pages/Rules";
import { GameVsPerson } from "./pages/GameVsPerson";
import { GameVsCpu } from "./pages/GameVsCpu";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/game_1vs1" element={<GameVsPerson />} />
      <Route path="/game_1vscpu" element={<GameVsCpu />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
