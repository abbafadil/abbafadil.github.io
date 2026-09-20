import { useState } from "react";

function Band({ name, Formed, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Formed in: {Formed}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function App() {
  const [Bands, setBands] = useState([
    {
      name: "Deftones",
      Formed: "Sacramento, California.",
      year: 1992
    },
  ]);

  function addBand() {
    setBands([
      ...Bands,
      {
        name: "Hoobastank.",
        Formed: "Agoura Hills, California.",
        year: 1994
      }
    ]);
  }

  function deleteBand(name) {
    setBands(
      Bands.filter((Band) => {
        return Band.name !== name;
      })
    );
  }

  return (
    <>
      <button onClick={addBand}>Add Band</button>

      {Bands.map((Band) => {
        return (
          <div key={Band.name}>
            <Band
              name={Band.name}
              Formed={Band.Formed}
              year={Band.year}
            />

            <button onClick={() => deleteBand(Band.name)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;