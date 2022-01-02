import {useState} from "react";

function Login(){

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });


    const handleChange = (e) => {
   
    }

    return(
        <>
        <h1>Login</h1>
<form>
<div className="field">
  <p className="control has-icons-left has-icons-right">
    <input className="input" type="text" placeholder="Username"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" placeholder="Password"/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>

<button className="submitButtons">Log In</button>
</form>
        
        </>

    )

};

export default Login;