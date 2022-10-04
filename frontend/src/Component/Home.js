import React from 'react';
import {Link} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";

function Home() {

        
        return(
        
            <div className='prop'>
                
                <img className='tas' src={require('../images/coliss.jpg')} width={400} height={400}  />
                <div className='press'><span id='env'>ENVOYEZ VOS LETTRES ET VOS COLIS EN LIGNE ET PROFITEZ <br></br> DU NOUVEAU TARIF.</span> <br></br> <span> <span id='deliv'>Delivery Express Inc</span>  Votre transporteur pour particuliers et professionnels.</span> <p>Vous avez un colis où une lettre à envoyer immédiatement sur PARIS et ses Arrondissements ? Expédiez en ligne sur notre site et profitez de notre nouvelle offre Click & Bring : Plus simple, plus flexible et plus économique. Une nouvelle grille tarifaire est appliquée pour mieux répondre à vos besoins. Vous pouvez désormais déposer votre colis ou Lettres dans l’un de nos Agences relais partenaires à proximité de chez vous.</p> </div>
                
            </div>
            
        )
}
export default Home;