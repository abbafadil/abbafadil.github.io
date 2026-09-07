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
      <button onClick={() => {
  setFavg([
    ...favg,
    {
      name: "RocketLauge",
      company: "psyonix",
      year: 2015
    }
  ]);
}}>
  Add FIFA
</button>
{favg.map((game) =>{
  return (
<div key={game.name}>
<h1>{game.name}</h1>
<h2>{game.company}</h2>
<h2>{game.year}</h2>

</div>
  
  )
        
      })}
      </>
    );
    
}


export default App;