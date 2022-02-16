import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateQuestion from "../pages/CreateQuestion";
import Game from "../pages/Game";
import Index from "../pages/Index";

export function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/questions" element={<CreateQuestion />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}
