import Index from "../pages/Index";
import Game from "../pages/Game";
import CreateQuestion from "../pages/CreateQuestion";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
