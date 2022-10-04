import {React,useState} from 'react';
import {Link,useParams} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";
import Navbar_deco from "./Navbar_deco";



// recuperer la valeur id du client // avec react router par un get 


                
function Livreur() {
        

        const [livraison_par_region,setlivraison_par_region]=useState('');

        let {region}=useParams();
        let arti = { region};
            fetch("http://localhost:3000/all_livraison_region", {
              headers: { 'Accept': 'application/json',
              'Content-Type': 'application/json'
             },
              method: "POST",
              body: JSON.stringify(arti),
            })
            .then((res) => res.json())
            .then((result) => {

                setlivraison_par_region(result.data.map((item)=> 
                <tr>
                     <td> 
                            {item.nom_distinataire} 
                     </td>
                     <td> 
                          {item.prenom_destinataire} 
                     </td>
                     <td>
                          {item.adresse_destinataire}
                     </td>
                     <td>
                           {item.poids_colis}
                     </td>
                     <td>
                           {item.date_livraison}
                       </td>
                     <td>
                             {item.type_livraison}
                       </td>
                     <td>
                            {item.sensibilite_livraison}
                       </td>
                     <td>
                            { item.nature_livraison}
                       </td>
                     <td>
                           { item.montant}
                       </td>
                 
                </tr>
                        
                 ))     
        })

        return(
   
            <div>
                    <Navbar_deco />
                    <h1> Vous êtes chargé des livraisons de la région au code postale : {region} </h1>
                    <table className='etat_livraison'>
                        <tr className='head'>
                         <td> Nom detinataire </td>
                         <td> Prenom destinataire</td>
                         <td> Adresse destinataire </td>
                         <td> Poids Colis </td>
                         <td> Date de la livraison </td>
                         <td> Type </td>
                         <td> Sensibilité </td>
                         <td> Nature </td>
                         <td> Montant (€) </td>
                        
                        </tr>
                        {livraison_par_region} 
                    </table>
            </div>
        )
}
export default Livreur;