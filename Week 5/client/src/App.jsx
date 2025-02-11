import {useState, useEffect} from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Make a fetch function 
  const fetchData = async() =>{
    try{
      const reponse = await fetch(`http://localhost:8000/data`,{
      });
      const data = await reponse.json();

      setMessage(JSON.stringify(data));
    }catch(error){
      console.log(error)
    }
  };

  const loginForm = async(e) =>{
    e.preventDefaults();
    const submission ={email,password}
    try{
      const reponse = await fetch(`http://localhost:8000`,{
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: "We add something here",
      });
      const data = await reponse.json();
      setMessage(JSON.stringify(data));
    }catch(error){}
  };


  return<div>{message}

  <button onClick={fetchData} >Click me for Data</button>


  <form onSubmit={loginForm}>
    <input 
    type="email" 
    placeholder="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <input 
    type="Password" 
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required
    />
    <button type="submit">Login</button>
  </form>
  
  
  
  
  </div>
}
export default App;