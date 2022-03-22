import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(toys => {
        console.log(toys)
        setToys(toys)
      })
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToyObj){
    setToys([...toys, newToyObj])
  }

  function deleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function updateToy(updatedToy) {
    const updatedToys = toys.map((toy) => {
      if (toy.id === updatedToy.id){
        return updatedToy;
      } else {
        return toy
      }
    });
    setToys(updatedToys)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        updateToy={updateToy}
        toys={toys}
        deleteToy={deleteToy}
        />
    </>
  );
}

export default App;
