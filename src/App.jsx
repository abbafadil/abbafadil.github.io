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
      year: 1992,
    },
  ]);

  function addBand() {
    setBands([
      Bands.map((band)=>{
        if (band.name === name){
          return{
            ...band,
            year:1993,
          };
        }
        return band;
      })
      
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
      <button onClick={addBand}>Change Year</button>

      {Bands.map((band) => {
        return (
          <div key={band.name}>
            <Band
              name={band.name}
              Formed={band.Formed}
              year={band.year}
            />

            <button onClick={() => deleteBand(band.name)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;