import Login from "./LogIn";

function Home({user}){

       
        
        <h1>
        home test </h1>
  
        if (user) {
            return <h1>Hi {user.username}</h1>;
        } else {
            return <h1>Login or Signup</h1>

            // Link to signup
        }
        

    
    


};

export default Home;