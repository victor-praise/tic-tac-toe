const Cell = ({cell, id,go,setGo,cells,setCells,winningMessage}) => {
  
    const handleClick = (e) => {
        // Logic to handle cell click, e.g., updating state or checking for a win
       
        if(!winningMessage){
           const taken = e.target.firstChild?.classList.contains("circle") || e.target.firstChild?.classList.contains("cross") || e.target.classList.contains("circle") || e.target.classList.contains("cross");
  
        if (!taken) {
          if(go === "circle") {
            e.target.firstChild.classList.add("circle");
            handleCellChange("circle");
          setGo("cross");
          } else if (go === "cross") {
            e.target.firstChild.classList.add("cross");
            handleCellChange("cross");
            setGo("circle");
          
          }
        }
        }
       
    };
    const handleCellChange = (className) => {
        // Logic to handle cell change, if needed
      const nextCell = cells.map((cell,index)=>{
          if(index === id) {
            return className;
          } else {
            return cell;
          }
        })
        setCells(nextCell);
    };
  return (
  <div className="square" id={id} onClick={handleClick}>
    <div> </div>
  </div>

  );
}
export default Cell; 