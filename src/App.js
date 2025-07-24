import { useEffect, useState } from "react";
import Cell from "./components/Cell";
import "../src/index.css";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const message = "it is now " + go + "'s turn";
  const [winningMessage, setWinningMessage] = useState("");
  const checkScore = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombinations.forEach((combination) => {
      let circleWins = combination.every(cell => cells[cell] === "circle");
      let crossWins = combination.every(cell => cells[cell] === "cross");
      if (circleWins) {
        setWinningMessage("Player circle wins!");
        return
      }
      if (crossWins) {
        setWinningMessage("Player cross wins!");
        return;
      }
    })

  };
  useEffect(() => {
    checkScore();
  }, [cells]);
  return (
    
    <div className="App">
    <div className="gameboard">
     
      {cells.map((cell, index) => (
        <Cell key={index} cell={cell} id={index} go={go} setGo={setGo} cells={cells} setCells={setCells} winningMessage={winningMessage} />
      ))}
    </div>
    <p> {winningMessage || message} </p>
    </div>
  
  );
}

export default App;
