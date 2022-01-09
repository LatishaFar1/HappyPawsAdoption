import React from 'react'
import {useState, useEffect} from "react";

export default function PetsCard({pet, likes, handleUpdate, handleDelete, setPets}) {


  function deletePet(id){
    fetch(`api/pets/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok){
        handleDelete(pet)
      }
    });
  }

  //FAVORITES 

  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   fetch('api/favorites/')
  //   .then(response => response.json())
  //   .then(favsData => {
  //     setFavorites([...favsData])
  //   })
  // }, []);

  // function handleUpdate(updatedFav, e){
  //   e.preventDefault();
  //   setFavorites((favorites) => 
  //   favorites.map((favorite) => {
  //     return favorites.id === updatedFav.id ? updatedFav : favorite;
  //   }))
  // }


  // function favoritePet({id, user_id, pet_id, favorite}){
  //   let params = {
  //     likes: favorite.likes,
  //     pet_id: pet_id,
  //     user_id: user_id
  //   }
  //  fetch(`api/favorites/${id}`, {
  //    method: "PATCH",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(params),
  //  })
  //  .then((response) => response.json())
  //  .then(handleUpdate);
  // }

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
  
  
  // function favoritePet(pet_id, favorite){
  //   let newLike =  (likes + 1);
  //  fetch(`api/favorites/${pet.id}`, {
  //    method: "PATCH",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify({likes: newLike, pet_id}),
  //  })
  //  .then((response) => response.json())
  //  .then(handleUpdate)
  
  // }

  // function handleFavUpdates(favorites)


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
    

    <button className="btn" onClick={(e) => favoritePet(pet.id)}>Favorite:
     </button>
    
     <div className="btn btn-dark btn-lg btn-block">{pet.likes}</div>
   

    <button className="btn btn-dark btn-lg btn-block" onClick={() => deletePet(pet.id)}>Delete</button>
  </div>
</div>
</div>
</div>
</div>

        </div>
    )
}
