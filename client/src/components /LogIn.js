import {useState} from "react";

function Login({setUser, user}){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



    function handleSubmit(e){
      e.preventDefault();
      fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password 
        }),
      })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }

    return(
        <>
    


 

<section className="vh-100" style={{backgroundColor: '#EABCAC'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                alt="login form"
                className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#32485C"}}></i>
                   
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="text"  name="username" value={username} onChange={(e) => setUsername(e.target.value)}    id="form2Example17" class="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-label" htmlFor="form2Example17">password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                 
                  {/* <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!" style="color: #393f81;">Register here</a></p>
               */}
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>

    )

};

export default Login;