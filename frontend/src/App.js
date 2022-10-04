import logo from './logo.svg';
import './App.css';
import Login from "./Component/Login";
import Client from "./Component/Client";
import Client_suivi from "./Component/Client_suivi";
import Admin from "./Component/Admin";
import Creation from "./Component/Creation";
import Creation_Livreur from "./Component/Creation_Livreur";
import Home from "./Component/Home";
import Contacts from "./Component/Contacts";
import Notfound from "./Component/Notfound";
import Navbar from "./Component/Navbar";
import Livreur from "./Component/Livreur";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
              <Route path="/" element={[<Navbar />,<Home />]} />
              <Route path="/Login" element={[<Navbar />,<Login />]} />
              <Route path="/Creation" element={[<Creation />]} />
              <Route path="/Creation_Livreur" element={[<Creation_Livreur />]} />
              
              <Route path="/admin" element={[<Admin />]} />

              <Route path="/client/:id_login" element={[<Client />]} />
              <Route path="/client/suivi/:id_login" element={[<Client_suivi />]} />


              <Route path="/livreur/:region" element={[<Livreur />]} />
              
              <Route path="/Home" element={[<Navbar />,<Home />]} />
              <Route path="/Contacts" element={[<Navbar />,<Contacts />]} />
              <Route path="*" element={[<Notfound />]} />
       </Routes>
       <footer> <p >Copyright &copy; 2022  KELFAOUI Chabane</p> </footer> 
       
    </div>
  );
}

export default App;
