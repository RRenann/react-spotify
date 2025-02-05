import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { faHome, faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Sidebar = () => {
    return(

        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className= "logo">
                <a href="localhost:3000">
                    <img src={logoSpotify} alt="Logo" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="localhost:3000">
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="localhost:3000">
                    <span><FontAwesomeIcon icon={faSearch} /></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>  
    </div>

    )
}

export default Sidebar;