import { useState } from "react";

function App(){
  const favg = 
    ["Minecraft", "Fifa27", "RocketLouge"];
    return(
      <>
{favg.map((game) =>{
  return <h2 key={game}>{game}</h2>;
        
      })};
      </>
    );
    
}


export default App;