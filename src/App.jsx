import { useState } from "react";

function Game({ name, Formed_in, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Formed_in: {Formed_in}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function App() {
  const [games, setGames] = useState([
    {
      name: "Jack Off Jill",
      Formed_in: "Fort Lauderdale, Florida",
      year: 1992
    },
    {
      name: "Slowdive",
      Formed_in: "Reading, Berkshire",
      year: 1989
    }
  ]);

  function addGame() {
    setGames([
      ...games,
      {
        name: "Clash Royale",
        company: "Agoura Hills, California",
        year: 1994
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