import React from 'react'

export default function PetsCard({pets, pet, likes, handleUpdate, handleDelete, setPets}) {


  function deletePet(id){
    fetch(`api/pets/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok){
        handleDelete(pet)
      }
    });
  }


  function favoritePet(id){
    const newLike = likes + 1 
   fetch(`api/pets/${id}`, {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({likes: newLike}),
   })
   .then((response) => response.json())
   .then(handleUpdate);
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
    {/* <li className="list-group-item">Take me home:</li> */}
    
  </ul>
  <div className="card-body">
    

    <button className="btn" onClick={() => favoritePet(pet.id)}>Favorite:
     </button>
     <div className="btn">{pet.likes}</div>
   

    <button className="btn btn-dark btn-lg btn-block" onClick={() => deletePet(pet.id)}>Delete</button>
  </div>
</div>
</div>
</div>
</div>

        </div>
    )
}
