import React, { useState } from 'react';
import {Link} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";
import Navbar_deco from "./Navbar_deco";



                



function Admin() {

                const [all_livr,setall_livr]=useState('');

                fetch("http://localhost:3000/get_all_livraison")
                .then((res) => res.json())
                .then((result) => {
            
                        setall_livr(result.data.map((item)=> 
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
                              <td>
                                    {item.region}
                                </td>
                            
                         </tr> ))
                        
                })

        return(
   
            <div>
                 <Navbar_deco />
                 <Link to="/Creation_Livreur"><div className="Creation_Livreur"> Crée un Compte Livreur </div></Link>
                    <h1 className='mes_liv'> Informations livraison en crous ... </h1>
                    <table className='etat_livraison'>
                        <tr className='head'>
                         <td>nom detinataire </td>
                         <td> prenom destinataire</td>
                         <td> adresse destinataire </td>
                         <td> poids Colis </td>
                         <td> Date de la livraison </td>
                         <td> Type </td>
                         <td> Sensibilité </td>
                         <td> Nature </td>
                         <td> Montant </td>
                         <td> Region</td>
                        
                        </tr>
                        {all_livr} 
                    </table>
                    

                   
                    
            </div>
        )
}
export default Admin;