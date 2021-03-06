
import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Account from "./pages/users/Account";
import Login from "./pages/users/Login";
import Profile from "./pages/users/Profile";
import Register from "./pages/users/Register";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Demande from "./pages/demande/Demande";
import axios from "axios";
import { useHistory } from "react-router-dom";


function App() {

const history = useHistory() ;
const [token,setToken ] = useState(null);
const [error,setError]=useState(false);
useEffect(()=> {
  axios.get("http://localhost:3005/users")
       .then(res=>{
         console.log (res)
       })
       .catch(error=>console.log)
       setToken(localStorage.getItem("token"))
        console.log(history)
      },[])

    const logout = () =>  {

         setToken(null);
        localStorage.removeItem("token");
        history.push("/login")
  
  
  }
    


  const login = (e)=>{
    e.preventDefault() ;
    const  {matricule ,password}=e.target.elements;
    console.log(matricule.value,password.value)
    axios.post("http://localhost:3005/login",{ 
      matricule: matricule.value,
      password: password.value 
     }).then(res=>{
       console.log(res)
       localStorage.setItem("token",res.data.token)
       setToken (res.data.token)
       history.push("/Account")
     })
   .catch(error=>{
     setError(true);
     console.log(error.msg)})
   }


  return (
    
        <div className="container-fluid">
          
          <Navbar logout={logout} 
          token={token}
          />
      
          <Switch>
              
            {
              token ?  
             <>
            
            <Route exact path="/account" component={Account} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/demande" component={Demande} />
            <Route exact path="/" component={Homepage} /> 
            </>
              :
               <>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login"  component={()=><Login  login={login} error={error} ></Login>}  /> 
            </>
          } 
            
            
          </Switch>
        </div>
      
  );
}

export default App;
