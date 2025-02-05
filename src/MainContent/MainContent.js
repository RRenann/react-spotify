import React from "react";
import './MainContent.css';
import logocard1 from '../../src/playlist/1.jpeg';
import logocard2 from '../../src/playlist/2.png';
import logocard3 from '../../src/playlist/3.jpeg';
import logocard4 from '../../src/playlist/4.jpeg';
import logocard5 from '../../src/playlist/5.jpeg';
import logocard6 from '../../src/playlist/6.jpeg';
import logocard7 from '../../src/playlist/7.jpeg';
import logocard8 from '../../src/playlist/8.jpeg';
import logocard9 from '../../src/playlist/9.jpeg';
import logocard10 from '../../src/playlist/10.jpeg';
import logocard11 from '../../src/playlist/11.jpeg';
import logocard12 from '../../src/playlist/12.jpeg';
import logocard13 from '../../src/playlist/13.jpeg';
import logocard14 from '../../src/playlist/14.jpeg';
import logocard15 from '../../src/playlist/15.jpeg';


const MainContent = () => {
    return (
        <div class="playlist-container">
                <div id="result-playlists">
                    <div class="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 class="session">Navegar por todas as seções</h2>
                    </div>

                    
                    <div class="offer__scroll-container">
                        <div class="offer__list">
                            <section class="offer__list-item">
                                {/* CARD 1*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card1">
                                        <img src={logocard1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                {/* CARD 2*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card2">
                                        <img src={logocard2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                {/* CARD 3*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card3">
                                        <img src={logocard3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                {/* CARD 4*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card4">
                                        <img src={logocard4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>

                                {/* CARD 5*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card5">
                                        <img src={logocard5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                {/* CARD 6*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card6">
                                        <img src={logocard6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                {/* CARD 7*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card7">
                                        <img src={logocard7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                {/* CARD 8*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card8">
                                        <img src={logocard8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                {/* CARD 9*/}
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card9">
                                        <img src={logocard9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>

                                 {/* CARD 10*/}
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card10">
                                        <img src={logocard10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                  {/* CARD 11*/}
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card11">
                                        <img src={logocard11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                {/* CARD 12*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card12">
                                        <img src={logocard12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                {/* CARD 13*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card13">
                                        <img src={logocard13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                {/* CARD 14*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card14">
                                        <img src={logocard14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                                 {/* CARD 15*/} 
                                <a href="http://localhost:3000" class="cards">
                                    <div class="cards card15">
                                        <img src={logocard15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                        
                    </div>
                </div>

            </div>
    )
}

export default MainContent;