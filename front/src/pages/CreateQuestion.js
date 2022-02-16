import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function CreateQuestion() {
    return (
      <div className="page-creation">
        <NavLink
        style={{ textDecoration: "none" }}
        component={Button}
        to="/"
      >
        <Button className="button-home-question">
          Home
        </Button>
      </NavLink>
      </div>
    );
  }
  
  export default CreateQuestion;
  