import PetsCard from "./PetsCard";

function Pets({pets}){
    return (
    <>
    <h1>Pets</h1>
    { pets.map(pet => 
    <PetsCard pet={pet}/>)}
    </>)
};

export default Pets;