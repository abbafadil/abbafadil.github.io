import { useState } from "react";

function App(){
  const favg = 
    [{
      name : "Minecraft" ,
      company : "Mojang" ,
      year : 2011
    },
    {
      name : "GTA V" ,
      company : "Rockstar",
      year : 2013
    },
    {
      name : "FIFA",
      company : "EA" ,
      year : 2023
    }]
    return(
      <>
{favg.map((game) =>{
  return (
<div>
<h1>{game.name}</h1>
<h2>{game.company}</h2>
<h2>{game.year}</h2>

</div>
  
  )
        
      })};
      </>
    );
    
}


export default App'