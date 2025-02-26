import '../App.css';
import { useState } from 'react';
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';
import { Link,useNavigate } from 'react-router-dom';
function Anime() {

    const items = [
        { id: 1, title: "Tokyo Ghoul", score: 97, type: "Anime" },
        { id: 2, title: "Death Note", score: 93, type: "Anime" },
        { id: 3, title: "Inuyasha", score: 95, type: "Anime" },
        { id: 4, title: "Bleach", score: 98, type: "Anime" },
        { id: 5, title: "Attack on Titan", score: 96, type: "Anime" },
        ];

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/"); // Redirige a la página principal
    };
    
    const Registre = () => {
        navigate("/Registre")
    };
    
        return (
        <div className="app">
            {/* Capçalera */}
            <header className="header">
            <nav className="nav">
                <Link to="/">
                    <img className="logo" src={joposep} alt="Logo" />
                    <button onClick={handleRedirect} className='botologo'></button>
                </Link>
                <Link to="/videojocs">Videojocs</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/Pelis">Pel·lícules</Link>
                <Link to="/series">Series</Link>
                <Link to="/restaurants">Restaurants</Link>
                <div className='fuentebusqueda'>
                    <input className='busqueda' type="search" style={{border:'solid 2px slateblue'}}/>
                    <img className='lupa' src={lupa}></img>
                </div>
                <div className='botoregis'>
                <Link to="/Registre">
                    <button onClick={Registre} className="registre">Registre</button>
                </Link>
                    <img className='logiusuari' src={usuari}></img>
                </div>
            </nav>
            </header>
    
            {/* Contingut principal */}
            <main className="content">
            <h2 className='tituljocs'>Anime</h2>
            <hr></hr>
            <iframe className='zelda' width="17%" height="190" src="https://www.youtube.com/embed/ofH5ptn5w-A?si=QJPvNLbnkS1Kevpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="item-list">
                {items.map((item) => (
                <div key={item.id} className="item">
                    <h3>{item.title}</h3>
                    <p>Type: {item.type}</p>
                    <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
                </div>
                ))}
            </div>
            </main>
            <div>
                {/* Footer */}
                <footer className="footer">
                <div className='movelog'>
                    <img className='josep'src={joposep}></img>
                </div>
                <p className='titulfoter'>Pàgina d'oci John i Josep</p>
                </footer>
            </div>
        </div>
        );
    };
    export default Anime;
    