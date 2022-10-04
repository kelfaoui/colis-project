import React from 'react';

import CompoStyle from"../CompoStyle.css";

function Contacts() {


        return(
                
   
            <div className='contacter'>
                    <h1 className='s_nous'> Vous voulez nous contacter ? <br></br> <span>Nos conseillers vous donnent tous les renseignements</span> <br></br> <span className='num'>+33 7 58 33 36 81</span> <br></br> <span className='dev_liv'>Devenir Livreur n'hesitez pas de nous Contacter </span> </h1>
                    <img src={require('../images/hero-front.webp')} width={400} />
                    
            </div>
            
            
          
                 
            
           
        )
 
}
export default Contacts;