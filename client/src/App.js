
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";
import LogIn from './components/LogIn';
import SignUp from "./components/SignUp";
import NavBar from './components/NavBar';
import Pets from "./components/Pets";
import NewPetForm from './components/NewPetForm';


function App() {


  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);
 

  useEffect(() => {
    fetch('api/pets/')
    .then(response => response.json())
    .then(petsData => {
      setPets([...petsData])
    })
  }, []);

  function handleAddPet(addedPet){
    setPets((pets) => [...pets, addedPet])
  }

  function handleDelete(deletedPet){
    setPets((pets) => pets.filter((pet) => pet.id !== deletedPet.id)
    );
  }

  function handleUpdate(e, updatedPet){
    e.preventDefault();
    setPets((pets) => 
    pets.map((pet) => {
      return pet.id ===updatedPet.id ? updatedPet : pet;
    }))
  }

 


  return (
    <div className="App">
      <Router>
      <NavBar user={user} setUser={setUser}/> 
      <Routes>

      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/new" element={<NewPetForm handleAddPet={handleAddPet} />} />
      <Route path="/login" element={<LogIn setUser={setUser} />} />

      <Route path="/signup" element={<SignUp setUser={setUser}/>}/>

      
      <Route path="/pets" element={<Pets handleUpdate={handleUpdate} pets={pets} handleDelete={handleDelete} />}/>

     
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
