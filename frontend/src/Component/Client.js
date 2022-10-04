import {React,useState}from 'react';
import {Link,useParams} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";
import Navbar_deco from "./Navbar_deco";


        



function Client() {

        // recuperer la valeur id du client // avec react router par un get 
        let {id_login}=useParams();
        let page_commandes = "/client/suivi/"+id_login;
        
        const [username, setusername] = useState(''); 
        const [userprenom, setuserprenom] = useState('');
        const [region, setregion] = useState('');
        const [adresse, setadresse] = useState('');
        const [poids, setpoids] = useState('');
        const [date, setdate] = useState('');
        const [type, settype] = useState('');
        const [nature, setnature] = useState('');
        const [sens, setsens] = useState('');
        const [montant, setmontant] = useState('');

        


        const valider = (e) => {
        
            e.preventDefault();
            let arti = { username,userprenom,region,adresse,poids,date,type,nature,sens,montant,id_login};
            fetch("http://localhost:3000/form_add_livraison", {
              headers: { 'Accept': 'application/json',
              'Content-Type': 'application/json'
             },
              method: "POST",
              body: JSON.stringify(arti),
            })
            .then((res) => res.json())
            .then((json) => {


                        alert("Demande Envoyée avec SUCCES ");
    
            } )

        };
       
// quand le client se connecte on recupere l'id de login avec le back et on la stock sur id_login de la livraison comme ca 
// on peut afficher avec tout les livraison qu'il possede

   
        return(
   
            <div>
                    <Navbar_deco />
                    <Link to={page_commandes}><div className="Creation_Livreur"> Consulter mes commandes </div></Link>
                    <div className='label'>
                    <table className="formulaire" >
                        <h3 className='kiki'>Ajouter une commande :</h3>
                        <div>
                                <label>Nom distinataire</label>
                                <td><input type="text" value={username} onChange={(e) => setusername(e.target.value)} /></td>
                        </div>
                        <div>
                                <label>Prenom destinataire</label>
                                <td><input type="text" value={userprenom} onChange={(e) => setuserprenom(e.target.value)}/></td>
                        </div>
                        <div>
                                <label>Region destinataire</label>
                                <td>
                                    <select onChange={(e) => setregion(e.target.value)}>
                                       
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
                                <label>adresse destinataire</label>
                                <td><input type="text" value={adresse} onChange={(e) => setadresse(e.target.value)}/></td>
                        </div>
                        <div>
                                <label>Poids "g"</label>
                                <td><input type="number" value={poids} onChange={(e) => setpoids(e.target.value)}/></td>
                        </div>
                        <div>
                                <label>date de livraison</label>
                                <td><input type="date" value={date} onChange={(e) => setdate(e.target.value)}/></td>
                        </div>
                        <div>
                                <label>type livraison</label>
                                <td>
                                <select onChange={(e) => settype(e.target.value)}>
                                        <option ></option>
                                        <option value="standard">standard</option>
                                        <option value="premium">premium</option>
                                    </select>
                                </td>
                        </div>
                        <div>
                                <label>Nature de livraison</label>
                                <td>
                                    <select onChange={(e) => setnature(e.target.value)}>
                                        <option ></option>
                                        <option value="lettre">Lettre</option>
                                        <option value="colis">Colis</option>
                                    </select>
                                </td>
                        </div>
                        <div>
                                <label>Sensibilité</label>
                                <td>
                                    <select onChange={(e) => setsens(e.target.value)}>
                                        <option></option>
                                        <option value="fragile">fragile</option>
                                        <option value="normale">normale</option>
                                    </select>
                                </td>
                        </div>
                        <div>
                                <label>Montant</label>
                                <td>   
                                    <select onChange={(e) => setmontant(e.target.value)}>
                                        <option ></option>
                                        <option value="1">1 g   -   250 g   | 10 €</option>
                                        <option value="2">250 g - 500 g | 15 €</option>
                                        <option value="3">500 g -  1 Kg | 20 €</option>
                                        <option value="4"> 1kg et plus  | 25 € </option>
                                    </select>
                                </td>
                        </div>
                        <div>
                                
                                <td>
                                    <button onClick={valider}>Valider</button>
                                </td>
                        </div>
                    </table>
                  
            </div>
            </div>
        )
}
export default Client;