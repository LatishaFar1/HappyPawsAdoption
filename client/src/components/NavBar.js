import React from 'react'
import {NavLink} from "react-router-dom";


export default function NavBar({user, setUser}) {


  function handleLogout(){
    fetch("/api/logout", {
      method: "DELETE",
    })
    .then((response) => {
      if (response.ok) {
        setUser(null)
      }
    });
  }
    return (
      

<nav className="navbar navbar-light bg-light" >
<div className="container-fluid" style={{backgroundColor: "#F7DFD4"}}>
  <NavLink to="/"  className="navbar-brand"> Home </NavLink>
  <NavLink to="/pets"  className="navbar-brand"> Our Pets </NavLink>
  <NavLink to="/new"  className="navbar-brand"> New Pet Form </NavLink>

    <div>
      {user ? (
        <button className="btn btn-dark btn-lg btn-block" onClick={handleLogout}>Logout</button>
      ) : (

        <>
     <NavLink to="/signup"  className="navbar-brand"> Sign Up </NavLink>
    <NavLink to="/login"  className="navbar-brand"> Log In </NavLink>
        </>
      )

      }

    </div>


  
 

</div>
</nav>
    )
}
