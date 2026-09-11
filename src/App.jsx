import { useState } from "react";

function Game({ name, company, year }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{company}</h2>
      <h2>{year}</h2>
    </div>
  );
}

function App() {
  const [favg, setFavg] = useState([
    {
      name: "Minecraft",
      company: "Mojang",
      year: 2011
    },
    {
      name: "GTA V",
      company: "Rockstar",
      year: 2013
    }
  ]);

  return (
    <>
      <Game
        name="Minecraft"
        company="Mojang"
        year={2011}
      />

      <Game
        name="GTA V"
        company="Rockstar"
        year={2013}
       />
        <Game
        name="Rocketleague"
        company="Psyonix"
        year={2015}
      />
    </>
  );
}

export default App;