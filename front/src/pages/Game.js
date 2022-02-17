import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DisplayQuestion } from "../components/DisplayQuestions";
import axios from 'axios'

 function Game() {

  const [allData, setAllData] = useState([])

  useEffect(() => {
    const res = async () => {
      return await axios.get("http://127.0.0.1:8000/api/questions", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((setAllData))}
    res()
  }, [])

  function getVal() {
  const val = document.querySelector('input').value;
}

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

      <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
        Combien de questions voulez-vous avoir ? (max {allData.data?.length})
        <input type="integer" placeholder="Nombre de questions" onClick={getVal}/>
      </div>

      <div>

        <DisplayQuestion data={allData.data}>
        </DisplayQuestion>
        
      </div>
    </div>
  );
}

export default Game;