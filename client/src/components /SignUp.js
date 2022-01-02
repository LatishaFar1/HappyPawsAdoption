import {useState} from 'react';

function SignUp({setUser}){

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });


    const handleChange = (e) => {
      setFormData(prev => {
        return{
          ...prev, [e.target.name]: e.target.value
        }
      })
    }


    function handleSubmit(e){
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (response.ok) {
          response.json.then((user) => setUser(user));
        }
      });
    }

    return(
        <>
         <h1>Sign Up Here:</h1>
<form onSubmit={handleSubmit}>
<div className="field">
  <p className="control has-icons-left has-icons-right">
    <input className="input" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}/>
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
    <input className="input" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>

<button className="submitButtons">Sign Up</button>
</form>
        
        </>
    );


};

export default SignUp;