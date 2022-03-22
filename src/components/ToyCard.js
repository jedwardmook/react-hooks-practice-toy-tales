import React from "react";

function ToyCard({toy, deleteToy, updateToy}) {
  const {id, image, likes = 0, name} = toy
  
  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        console.log(toy)
        deleteToy(toy)
      });
  }

  function handleLike() {
    console.log(id, "I was clicked!")
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
     .then((response) => response.json())
     .then((updatedToy) => {
       console.log(likes)
       updateToy(updatedToy)
     })
  }

  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
