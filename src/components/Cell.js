const Cell = ({cell, id}) => {
    const handleClick = () => {
        // Logic to handle cell click, e.g., updating state or checking for a win
        console.log(`Cell ${id} clicked with value: ${cell}`);
    };
  return (
  <div className="square" id={id} onClick={handleClick}>
    <div> {cell}</div>
  </div>

  );
}
export default Cell; 