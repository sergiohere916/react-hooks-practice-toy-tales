import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allToys, setAllToys] = useState([])
  const toysUrl = "http://localhost:3001/toys";
  // let addedToy = 1;
  
  useEffect(() => {
    fetch(toysUrl) 
    .then(res => res.json())
    .then(toysData => {
      setAllToys(toysData)
      
    })
  
  }, [])

  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(toy) {
    fetch(toysUrl, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(toy)
    })
    setAllToys([...allToys, toy]);
    
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer allToys={allToys} />
    </>
  );
}

export default App;
