import { useState } from "react";

function App(){
  const user = [
    {
      name : "Abbas" ,
      age : 22 ,
      major : "Front-end"
    },

    {
      name : "Ahmed" ,
      age : 26 ,
      major : "IT"
    },

    {
      name : "Saramad" ,
      age : 22,
      major : "Back-end"
    }
  ];

      return(
         
        <>
       
        {user.map((user) =>{
          
            return (
<div>
<h1>{user.name}</h1>
            <p>{user.age}</p>
            <p>{user.major}</p>
            </div>

            ); 
        })}
        </>
        
      );
    
}


export default App;