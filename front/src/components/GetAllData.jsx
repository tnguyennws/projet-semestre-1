import axios from 'axios'
import { useState } from "react"; 

export function GetAllData(){

    return axios
    .get("http://127.0.0.1:8000/api/questions", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}