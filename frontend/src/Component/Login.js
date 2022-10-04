import { useState } from "react";
import CompoStyle from"../CompoStyle.css";
import { useNavigate } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";


function Login() {
    ////////////////////////////////////////
    const [username, setusername] = useState(''); 
    const [password, setpassword] = useState('');
    let navigate = useNavigate(); 

    const login = (e) => {
        e.preventDefault();
        let arti = { username, password };
        fetch("http://localhost:3000/login", {
          headers: { 'Accept': 'application/json',
          'Content-Type': 'application/json'
         },
          method: "POST",
          body: JSON.stringify(arti),
        })
        .then((res) => res.json())
        .then((json) => {
        let aa = "123";
                if(json.data === 1 && json.role === 2 )
                {
                    // faire un message succes pour un peit instant
                    alert("Bien connecté au compte client")
                    setTimeout(()=>{
                        navigate("/client/"+json.id_login, { replace: true });
                    }, 300);
                }
                if(json.data === 1 && json.role ===1)
                {
                    // faire un message succes pour un peit instant
                     alert("Admin Connecté !")
                     setTimeout(()=>{
                        navigate("/admin", { replace: true });
                    }, 300);                     
                }
                if(json.data === 1 && json.role ===3)
                {
                    // faire un message succes pour un peit instant
                     alert("Livreur Connecté !")
                     setTimeout(()=>{
                        navigate("/livreur/"+json.region, { replace: true });
                    }, 300);                     
                }
                if(json.data === 0)
                {
                   alert("Identifiant érrnoé")  
                }

        } )
    };

      return (
        <div align="center" className="login">
            <table>
            <h1> Delivery Express Inc </h1>
                <tr>
                    <td> <img src={require('../images/Logo_m.jpg')} width={450} /></td>
                </tr>
                <tr>
                    
                </tr>
                <tr>
                    <span className="sid"> S'identifier :  </span>
                </tr>
            </table>
            <form method="POST">
                <table>
                    <tr>
                        <td> Utilisateur : </td>
                        <td>
                            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Mot de passe : </td>
                        <td>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                             <button className="seconn" onClick={login} >Se connecter</button>
                        </td>
                    </tr>
                    
                </table>
               
                <Link to="/Creation"><div className="creation"> Crée un Compte </div></Link>


	        </form>
        </div>
        
 
      )
     

}

export default Login;