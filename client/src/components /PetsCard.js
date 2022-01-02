import React from "react";

function PetsCard({pet}){

    return(
        <>
     

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={pet.image} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={pet.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{pet.name}</p>
        <p className="subtitle is-6">Age: {pet.age}</p>
      </div>
    </div>

    <div className="content">
      {pet.description}
     
      <br/>
      <strong>ADD FAVORITES </strong>
    </div>
  </div>
</div>
        </>
    )
};


export default PetsCard;
