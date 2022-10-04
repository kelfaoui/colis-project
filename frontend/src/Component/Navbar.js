import React from 'react';
import {Link} from "react-router-dom";
import CompoStyle from"../CompoStyle.css";

function Navbar() {


        return(
                    <nav className='navv' >
                        <div className='nabr' ><Link to="/Home">A propos</Link>
                        <Link to="/Login">S'Identifier</Link>
                        <Link to="/Contacts">Contact</Link> 
                         </div>
                         <div className='cha'>
                            <button className='telech'><Link to="/Notfound">Telecharger l'application</Link></button>
                         </div>
                    </nav>
        )
}
export default Navbar;

