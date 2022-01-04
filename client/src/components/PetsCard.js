import React from 'react'

export default function PetsCard({pets, pet, handleDelete}) {


  function deletePet(id){
    fetch(`api/pets/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok){
        handleDelete(pets)
      }
    });
  }



    return (
        <div>
<div className="container-fluid d-flex justify-content-center" style={{flexDirection: "row"}}>
     <div className="row">
       <div className="g-col-6">
     <div className="card" style={{width: "50rem", padding: "60px" }}>
  <img
    src={pet.image}
    className="card-img-top" alt=""
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
    
    MESSAGE
    <button className="btn btn-dark btn-lg btn-block">Favorite</button>
    <button className="btn btn-dark btn-lg btn-block" onClick={deletePet}>Delete</button>
  </div>
</div>
</div>
</div>
</div>

        </div>
    )
}
