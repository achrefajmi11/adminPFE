import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/user/EditUser";
import Cordonnee from "./pages/cordonnee/cordonnee";
import HistoriquedemandeList from "./pages/Historiquedemande/HistoriquedemandeList";



function App() {
  return (
    <Router>
      <Navbar/> 
      
      <div className="container">
        
        <Sidebar />
       
        <Switch>
          
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;