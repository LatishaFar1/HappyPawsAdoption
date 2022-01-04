import React from 'react'
import PetsCard from "./PetsCard";


export default function Pets({pets, handleDelete}) {
    return (
        <div>
        <br/>
        <br/>
    { pets.map(pet => 
    <PetsCard pet={pet} key={pet.id} handleDelete={handleDelete}/>)}
        </div>
    )
}
