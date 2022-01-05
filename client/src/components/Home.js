import React from 'react'

export default function Home({user}) {


            if (user) {
                return  <h1>Hi {user.username}! 
                <br/>
                Welcome to Happy Paws Adoption!
                <br/>
                <br/>
                Check out our pets! 🐕  🐈  🐢

                <br/>

                <div className="bg-image" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')",
            height: "100vh"}}>
            </div>  
                 </h1>; 
            } else{
                return <h1>Please login or signup above</h1>
            }
    
}
