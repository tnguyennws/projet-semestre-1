import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export function Selection() {
  return (
    <div className="selection">
      Bienvenue sur Quiz Game
      <NavLink
        style={{ textDecoration: "none" }}
        component={Button}
        to="/questions"
      >
        <Button className="button-question">Ajouter des questions</Button>
      </NavLink>
      <NavLink 
        style={{ textDecoration: "none" }} 
        component={Button} 
        to="/game">
        <Button className="button-game">Jouer</Button>
      </NavLink>
    </div>
  );
}
