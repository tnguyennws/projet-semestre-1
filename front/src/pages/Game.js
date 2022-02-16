import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Game() {
  return (
    <div className="page-game">
      <NavLink
        style={{ textDecoration: "none" }}
        component={Button}
        to="/"
      >
        <Button className="button-home-game">
          Home
        </Button>
      </NavLink>
    </div>
  );
}

export default Game;
