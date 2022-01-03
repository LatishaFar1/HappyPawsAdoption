import './App.css';
import React from 'react';
import Home from './components /Home';
import NavBar from './components /NavBar';
import Pets from './components /Pets';
import LogIn from "./components /LogIn";
import {useState, useEffect} from "react";
import SignUp from './components /SignUp';

function App() {

  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/pets/')
    .then(response => response.json())
    .then(petsData => {
      setPets([...petsData])
    })
  }, [])

  // useEffect(() => {
  //   fetch("/login").then((response) => {
  //     if (response.ok){
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <div className="App">


   
    

       <NavBar />
       
       <Home user={user}/>
       {/* path="/login" */}
       <LogIn setUser={setUser}/>
       {/* path="/signup" */}
       <SignUp setUser={setUser}/>
       {/* <Home/>
      <Pets pets={pets}/> */}
    </div>
  );
}

export default App;
