import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, updateToy}) {
  return (
    <div id="toy-collection">{toys.map((toy, id) =>{
      return <ToyCard
        updateToy={updateToy} 
        toy={toy} 
        key={id}
        deleteToy={deleteToy}
      />
    })}</div>
  );
}

export default ToyContainer;
