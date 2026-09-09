import { useState } from "react";

function App(){
  const [favg, setFavg] = useState([{
      name : "Minecraft" ,
      company : "Mojang" ,
      year : 2011
    },
    {
      name : "GTA V" ,
      company : "Rockstar",
      year : 2013
    },])
    
    return(
      <>
      
  Add Rocket Leauge
</button>
{favg.map((game) =>{
  return (
<div key={game.name}>
<h1>{game.name}</h1>
<h2>{game.company}</h2>
<h2>{game.year}</h2>

<button onClick={() => {
  setFavg(
    favg.filter((item) =>{
      return item.name !== game.name;
    })
  );
}}>Delete</button>
</div>
  
  )
        
      })}
      </>
    );
    
}


export default App;