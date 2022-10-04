import {React,useState} from 'react';
import {Link} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";
import Navbar_deco from "./Navbar_deco";

function Creation_Livreur() {

        const [nom, setnom] = useState(''); 
        const [username, setusername] = useState(''); 
        const [userprenom, setuserprenom] = useState('');
        const [region, setregion] = useState('');
        const [password, setpassword] = useState('');
        const [sexe, setsexe] = useState('');
        const [tel, settel] = useState('');
        const [salaire, setsalaire] = useState('');
        

        let role = "livreur";

        const ajouter = (e) => {
            e.preventDefault();
            let arti = { nom,username,role,userprenom,region,password,sexe,tel,salaire};
            fetch("http://localhost:3000/add_livreur", {
              headers: { 'Accept': 'application/json',
              'Content-Type': 'application/json'
             },
              method: "POST",
              body: JSON.stringify(arti),
            })
            .then((res) => res.json())
            .then((json) => {


                        alert("Employé Bien ajouté ! ");
    
            } )

        };
        return(
        <>
                <Navbar_deco />
                <h1 className='ajt_liv'>Ajouter un Livreur</h1>
                <div className='label'>
                <table className="formulaire">
                        <div>
                                <label>Username (Email ) </label> 
                                <td><input type="text" value={username} onChange={(e) => setusername(e.target.value)} required /></td>
                        </div>
                        <div>
                                <label>Nom     </label>
                                <td><input type="text" value={nom} onChange={(e) => setnom(e.target.value)}required /></td>
                        </div>
                        <div>
                                <label>Prénom  </label>
                                <td><input type="text" value={userprenom} onChange={(e) => setuserprenom(e.target.value)}/></td>
                        </div>
                        <div>
                                <label>Region  </label>
                                <td>
                                    <select  onChange={(e) => setregion(e.target.value)} required>
                                        <option>&nbsp;selectionner la region</option>
                                        <option value="75001">region Paris 01 </option>
                                        <option value="75002">region Paris 02 </option>
                                        <option value="75003">region Paris 03 </option>
                                        <option value="75004">region Paris 04 </option>
                                        <option value="75005">region Paris 05 </option>
                                        <option value="75006">region Paris 06 </option>
                                        <option value="75007">region Paris 07 </option>
                                        <option value="75008">region Paris 08 </option>
                                        <option value="75009">region Paris 09 </option>
                                        <option value="75010">region Paris 10 </option>
                                        <option value="75011">region Paris 11 </option>
                                        <option value="75012">region Paris 12 </option>
                                        <option value="75013">region Paris 13 </option>
                                        <option value="75014">region Paris 14 </option>
                                        <option value="75015">region Paris15 </option>
                                        <option value="75016">region Paris 16 </option>
                                        <option value="75017">region Paris 17 </option>
                                        <option value="75018">region Paris 18 </option>
                                        <option value="75019">region Paris 19 </option>
                                        <option value="75020">region Paris 20 </option>
                                    </select>
                                </td>
                        </div>
                        <div>
                                <label>Password</label>
                                <td><input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required/></td>
                        </div>
                        <div>
                                <label>Sexe  </label>
                                <td>
                                   <select onChange={(e) => setsexe(e.target.value)} required>
                                        <option >&nbsp;selectionner le sexe</option>
                                        <option value="masculin">masculin </option>
                                        <option value="feminin">feminin </option>
                                    </select>
                                </td>
                        </div>
                        <div>
                                <label>Telephone</label>
                                <td><input type="tel" value={tel} onChange={(e) => settel(e.target.value)} required/></td>
                        </div>
                        <div>
                                <label>Salaire</label>
                                <td><input type="salaire" value={salaire} onChange={(e) => setsalaire(e.target.value)} required/></td>
                        </div>
                        <div>
                                
                                <td>
                                    <button onClick={ajouter}>Ajouter</button>
                                    <button><Link to="/admin">  Revenir </Link></button>
                                </td>
                        </div>
                    </table>
                    

                </div>

            </>
        )

   
}
export default Creation_Livreur;