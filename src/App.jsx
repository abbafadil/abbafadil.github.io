import { useState } from "react";

function Band({ name, genra, year, deleteBand }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Genra: {genra}</p>
      <p>Year: {year}</p>
      
            <button onClick={() => deleteBand(name)}>
              Delete
            </button>
    </div>
  );
}

function App() {
  const [Bands, setBands] = useState([
    {
      name: "Deftones",
      genra: "Alternative Rock.",
      year: 1992,
    },


  ]);

 function addBand() {
  setBands([
    ...Bands,
    {
      name: "Slowdive",
      genra: "Shoegaze",
      year: 1989,
    },
  ]);
}
  function deleteBand(name) {
    setBands(
      Bands.filter((band) => {
        return band.name !== name;
      })
    );
  }

  return (
    <>
      <button onClick={addBand}>Add Band</button>

      {Bands.map((band) => {
        return (
          <div key={band.name}>
            <Band
              name={band.name}
              genra={band.genra}
              year={band.year}
              deleteBand={deleteBand}
            />

          </div>
        );
      })}
    </>
  );
}

export default App;