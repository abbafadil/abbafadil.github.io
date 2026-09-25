import { useState } from "react";

function byuser({ name, genra, year, deleteBand }) {
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
  const [byuser, setByuser] = useState("")
  return(
<>
<input onChange={(event) => setByuser(event.target.value)}/>
</>
);

 function addBand() {
  setBands([
    ...byusers,
    {
      name: "Slowdive.",
      genra: "Shoegaze",
      year: 1989,
    },
  ]);
}
  function deleteBand(name) {
    setBands(
      byusers.filter(byuser) => {
        return byuser.name !== name;
      })
    );
  }

  return (
    <>
      <button onClick={addBand}>Add Band</button>

      {byusers.map((byuser) => {
        return (
          <div key={byuser.name}>
            <byuser
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