import { useState } from "react";

function Game({ name, Formed, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Formed: {Formed}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function App() {
  const [games, setGames] = useState([
    {
      name: "Jack Off Jill",
      Formed: "Fort Lauderdale, Florida",
      year: 1992
    },
    {
      name: "Slowdive",
      Formed: "Reading, Berkshire",
      year: 1989
    }
  ]);

  function addGame() {
    setGames([
      ...games,
      {
        name: "Hoobastank",
        Formed: "Agoura Hills, California",
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
      <button onClick={addGame}>Add Band</button>

      {games.map((game) => {
        return (
          <div key={game.name}>
            <Game
              name={game.name}
              Formed={game.Formed}
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