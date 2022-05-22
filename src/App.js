import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/user/EditUser";
import Cordonnee from "./pages/cordonnee/cordonnee";
import Login from "./components/Login";
import HistoriquedemandeList from "./pages/Historiquedemande/HistoriquedemandeList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function App() {

  
const history = useHistory() ;
const [token,setToken ] = useState(null);
const [error,setError]=useState(false);
  useEffect(()=> {
    
         setToken(localStorage.getItem("token"))
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
    <Router>
      <Navbar logout={logout} 

      token={token}
          />
      
      
      <div className="container">
        
        <Sidebar />
       
        <Switch>
             
        {
              token ?  
             <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/userList">
            <UserList />
          </Route>
          <Route path="/Edituser">
            <EditUser/>
          </Route>
          <Route path="/EditUser">
            <EditUser />
          </Route>
          <Route path="/HistoriquedemandeList">
            <HistoriquedemandeList />
          </Route>
          <Route path="/cordonee">
            <Cordonnee />
      
          </Route>
          </>
              :
               <>
          <Route exact path="/login"  component={()=><Login  login={login} error={error} ></Login>}  /> 
          </>
          } 
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;