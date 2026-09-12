import { useState } from "react";

function Game({ name, company, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Company: {company}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function App() {
  const [games, setGames] = useState([
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

  function addGame() {
    setGames([
      ...games,
      {
        name: "Rocket League",
        company: "Psyonix",
        year: 2015
      }
    ]);
  }

  function deleteGame(name) {
    setGames(
      games.filter((game) => {
        return game.name !== name;
      })
    );
  }

  return (
    <>
      <button onClick={addGame}>Add Game</button>

      {games.map((game) => {
        return (
          <div key={game.name}>
            <Game
              name={game.name}
              company={game.company}
              year={game.year}
            />

            <button onClick={() => deleteGame(game.name)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;