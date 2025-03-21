import React from 'react';
import './App.css';
import {useNavigate, Link } from 'react-router-dom';
import joposep from './imagenes/joj.png';
import lupa from './imagenes/lupa.png';
import usuari from './imagenes/use.png';

const Menu = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/"); // Redirige a la página principal
    };

    const Registre = () => {
        navigate("/Registre")
    };
  return (
    <div className="menu">
        {/* Capçalera */}
        <div className="nav">
            <div className='oclick'>
                <Link to="/">
                    <img className="josep" src={joposep} alt="Logo" />
                    <button onClick={handleRedirect} className='botologo'></button>
                </Link>
            </div>
            <a href="/Videojocs">Videojocs</a>
            <a href="/Anime">Anime</a>
            <a href="/Pelis">Pel·lícules</a>
            <a href="/Series">Series</a>
            <a href="/Restaurants">Restaurants</a>
            <div className="fuentebusqueda">
                <input className="busqueda" type="search" style={{ border: 'solid 2px slateblue' }} />
                <img className="lupa" src={lupa} alt="Lupa" />
            </div>
            <div className="botoregis">
            <Link to="/Registre">
                <button onClick={Registre} className="registre">Registre</button>
            </Link>
            <button className="usuari-btn" onClick={() => navigate("/Usuari")}>
                <img className="logiusuari" src={usuari} alt="Usuari" />
            </button>
            </div>
        </div>
    </div>
   
  );
};

export default Menu;