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
  const [Names, setNames] = useState("");
  const [Genras, setGenras]= useState("");
  const [Years, setYears]= useState("");
  const [Bands, setBands] = useState([
    {
      name: "Deftones",
      genra: "Alternative Rock",
      year: 1992,
    },
    {
      name: "Slowdive",
      genra: "Shoegaze",
      year: 1989,
    },
  ]
);


  function addBand() {
    const newBand =
      {
        name: Names ,
        genra: Genras ,
        year: Years ,
      };

      setBands([...Bands, newBand])
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
    <input
value={Names}
onChange={(event) => setNames(event.target.value)}
/>

<input
value={Genras}
onChange={(event) => setGenras(event.target.value)}
/>

<input
value={Years}
onChange={(event) => setYears(event.target.value)}
/>

<button onClick={addBand}>Add youe band</button>

      {Bands.map((band) => {
        return (
          <Band
            key={band.name}
            name={band.name}
            genra={band.genra}
            year={band.year}
            deleteBand={deleteBand}
          />
        );
      })}
    </>
  );
}

export default App;