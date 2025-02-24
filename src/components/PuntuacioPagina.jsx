import '../App.css';
import { useState } from 'react';
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';
import { Link,useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleRedirect = () => {
    navigate("/"); // Redirige a la página principal
};

function MenuPrincipal() {

    return (
    <div className="app">
        {/* Capçalera */}
        <header className="header">
        <nav className="nav">
            <Link to="/">
                <img className="logo" src={joposep} alt="Logo" />
                <button onClick={handleRedirect} className='botologo'></button>
            </Link>
            <a href="#Videojocs">Videojocs</a>
            <a href="#Anime">Anime</a>
            <a href="#Pel·lícules">Pel·lícules</a>
            <a href="#Series">Series</a>
            <a href="#Restaurants">Restaurants</a>
            <div className='fuentebusqueda'>
                <input className='busqueda' type="search" style={{border:'solid 2px slateblue'}}/>
                <img className='lupa' src={lupa}></img>
            </div>
            <div className='botoregis'>
                <button className='registre'>Registre</button>
                <img className='logiusuari' src={usuari}></img>
            </div>
        </nav>
        </header>

        {/* Contingut principal */}
        <main className="content">
        Hola
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
export default MenuPrincipal;

