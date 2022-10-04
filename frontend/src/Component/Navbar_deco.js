import React from 'react';
import {Link} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";

function Navbar_deco() {


        return(
                    <nav className="deco">
                        <button className='telech2'><Link to="/login">Se deconnecter</Link> </button> 
                        <button className='telech'><Link to="/Notfound">Telecharger l'application</Link></button> 
                    </nav>
        )
}
export default Navbar_deco;

