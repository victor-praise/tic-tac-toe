import { useState } from "react";
import Cell from "./components/Cell";
import "../src/index.css";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const message = "it is now " + go + "'s turn";
  const [winningMessage, setWinningMessage] = useState("");
  return (
    
    <div className="App">
    <div className="gameboard">
     
      {cells.map((cell, index) => (
        <Cell key={index} cell={cell} id={index} />
      ))}
    </div>
    <p> {winningMessage || message} </p>
    </div>
  
  );
}

export default App;
