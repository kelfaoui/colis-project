import {React, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";
import Navbar_deco from "./Navbar_deco";

// recuperer la valeur id du client

function Client_suivi() {
        
        
        // recuperation id client dont on veut faire la recherche avec lui sa

        let {id_login}=useParams();

        let page_client = "/client/"+id_login;

        // commandes effectuer par le client
   
        const [commande_client, setcommande_client]= useState('');

    
        let arti = { id_login};
       

        fetch("http://localhost:3000/commandes_client", {
          headers: { 'Accept': 'application/json',
          'Content-Type': 'application/json'
         },
          method: "POST",
          body: JSON.stringify(arti),
        })
        .then((res) => res.json())
        .then((result) => {

            setcommande_client(result.data.map((item)=> 
            <tr>
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
                 <td>
                       {item.region}
                   </td>
                
            </tr>
                    
             ))     
    })

    

        return(
   
            <div className='livraisons' >
                    <Navbar_deco />

                    <h1 className='mes_liv'> Mes livraisons</h1>
                    <table className='etat_livraison'>
                        <tr className='head'>
                         <td> Adresse destinataire </td>
                         <td> Poids Colis(G) </td>
                         <td> Date de la livraison </td>
                         <td> Type </td>
                         <td> Sensibilité </td>
                         <td> Nature </td>
                         <td> Montant (€) </td>
                         <td> Region </td> 
                         
                        </tr>
                        {commande_client} 
                    </table>
                    
                    <Link to={page_client}><button className="client"> Revenir </button></Link>
            </div>
        )
}

export default Client_suivi;