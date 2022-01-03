import React from "react";

function PetsCard({pet}){

    return(
        <>
        <div className="container-fluid d-flex justify-content-center" style={{flexDirection: "row"}}>
     <div className="row">
       <div className="g-col-6">
     <div className="card" style={{width: "50rem", padding: "60px" }}>
  <img
    src={pet.image}
    className="card-img-top"
    alt="pet photo"
  />
  <div className="card-body">
    <h5 className="card-title">{pet.name}</h5>
    <p className="card-text">
     age: {pet.age}
      <br/>
      {pet.description}
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Take me home:</li>
    
  </ul>
  <div className="card-body">
    FAVORITE
    MESSAGE
  </div>
</div>
</div>
</div>
</div>




{/* <div className="card">
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
</div> */}
        </>
    )
};


export default PetsCard;
