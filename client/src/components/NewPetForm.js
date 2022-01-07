import React, {useState} from 'react'

export default function NewPetForm({handleAddPet}) {

    const [formInfo, setFormInfo] = useState({
        name: "",
        age: "",
        image: "",
        description: ""
    });



    const handleChange = (event) => {
        setFormInfo((prev) => {
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInfo),
        })
        .then((response) => response.json())
        .then((newPet) => {
            setFormInfo({});
            handleAddPet(newPet)
        });
    }


    return (
        <section className="vh-100" style={{backgroundColor: "#32485C"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1585696862208-ca12defa3a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                      alt="new pet form"
                      className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                      <form onSubmit={handleSubmit}>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#32485C"}}></i>
                         
                        </div>
      
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Submit a new pet</h5>
      
                        <div className="form-outline mb-4">
                          <input type="text"  name="name"  onChange={handleChange} value={formInfo.name}  id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17">pet name</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="text" id="form2Example27" className="form-control form-control-lg" name="age" onChange={handleChange} value={formInfo.age} />
                          <label className="form-label" htmlFor="form2Example17">age</label>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="text" id="form2Example27" className="form-control form-control-lg" name="description" onChange={handleChange} value={formInfo.description} />
                          <label className="form-label" htmlFor="form2Example17"> tell us what they're like</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="text" id="form2Example27" className="form-control form-control-lg" name="image" onChange={handleChange} value={formInfo.image}  />
                          <label className="form-label" htmlFor="form2Example17">image url</label>
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Submit</button>
                        </div>
      
                  
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
