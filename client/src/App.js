import './App.css';
import React from 'react';
import Home from './components /Home';
import NavBar from './components /NavBar';
import Pets from './components /Pets';
import LogIn from "./components /LogIn";
import {useState, useEffect} from "react";

function App() {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pets/')
    .then(response => response.json())
    .then(petsData => {
      setPets([...petsData])
    })
  }, [])


  return (
    <div className="App">


   
    

       <NavBar />
       <LogIn/>
       <Home/>
      <Pets pets={pets}/>
    </div>
  );
}

export default App;
