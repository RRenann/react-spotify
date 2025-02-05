import React from "react";
import './Library.css';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Library = () => { 
  
  return (
    <div className="library">
      <div className="library__content">
        <button className="library__button">
          <span className="fa-solid fa-book"></span>
          <span>Sua biblioteca</span>
        </button>
        <span className="fa fa-plus"></span>
      </div>
      <section className="section-playlist">
        <div className="section-playlist__content">
          <span className="text title">Crie sua primeira playlist</span>
          <span className="text subtitle">É fácil, vamos te ajudar.</span>
          <button className="section-playlist__button">
            <span>Criar playlist</span>
          </button>
        </div>
      </section>
      <div className="cookies">
        <a href="localhost:3000">Cookies</a>
      </div>
      <div className="languages">
        <button className="languages__button">
          <span><FontAwesomeIcon icon={faGlobe} /></span>
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
  );
}

export default Library;