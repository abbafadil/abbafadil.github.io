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
      

{favg.map((game) => {
  return (
    <div key={game.name}>
      <h1>{game.name}</h1>
      <h2>{game.company}</h2>
      <h2>{game.year}</h2>

      <button onClick={() => {
        setFavg(
          favg.map((game) => {
           if (game.name === "Minecraft") {
            return{
              ...game,
              year : 2025
            };
           }
           return game;
          })
        );
      }}>
        update GTA V
      </button>
    </div>
  );
})}
  
  
      </>
    );
    
}


export default App;