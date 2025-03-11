import '../App.css';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';
import ReactPlayer from 'react-player'

function PaginaPrincipal() {
    const items = [
        { id: 1, title: "The Legend of Zelda: Breath of the Wild", score: 97, type: "Game" },
        { id: 2, title: "The Last of Us Part II", score: 93, type: "Game" },
        { id: 3, title: "Breaking Bad", score: 95, type: "TV Show" },
        { id: 4, title: "The Godfather", score: 98, type: "Movie" },
        { id: 5, title: "Red Dead Redemption 2", score: 96, type: "Game" },
    ];

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/"); // Redirige a la página principal
    };

    const Registre = () => {
        navigate("/Registre")
    };
    const Puntos = () => {
        navigate("/Puntuacio");
    };
    
    const VidUrl="https://youtu.be/sjxLF4IYnJc?si=xEu3PzLgB4h76uSg"

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='contenidoprincipal'>
            <div className="menu">
                {/* Capçalera */}
                <div className="nav">
                <Link to="/">
                    <img className="logo" src={joposep} alt="Logo" />
                    <button onClick={handleRedirect} className='botologo'></button>
                </Link>
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
                        <img className="logiusuari" src={usuari} alt="Usuari" />
                    </div>
                </div>
            </div>
            {/* Contingut principal */}
            <div className="content2">
                <h2 className="tituljocs">Videojocs</h2>
                <hr />
                <div className='paginaPunt'>
                    <div className='PrimerJoc'
                        onMouseEnter={() => setIsPlaying(true)} 
                        onMouseLeave={() => setIsPlaying(false)}
                    >
                        <button onClick={Puntos} className="botopuntos"></button>
                        <ReactPlayer
                            url={VidUrl}
                            playing={isPlaying}
                            volume={0.5}
                            width={260}
                            height={180}
                            style={{borderRadius:"20px"}}
                            loop
                        />
                    </div>
                </div>
                <div className="item-list">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <h3>{item.title}</h3>
                            <p>Type: {item.type}</p>
                            <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
                        </div>
                    ))}
                </div>

                <h2 className="titulanime">Anime</h2>
                <hr />
                <div className="item-list">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <h3>{item.title}</h3>
                            <p>Type: {item.type}</p>
                            <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
                        </div>
                    ))}
                </div>

                <h2 className="titulpeli">Pelis</h2>
                <hr />
                <div className="item-list">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <h3>{item.title}</h3>
                            <p>Type: {item.type}</p>
                            <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
                        </div>
                    ))}
                </div>

                <h2 className="titulseries">Series</h2>
                <hr />
                <div className="item-list">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <h3>{item.title}</h3>
                            <p>Type: {item.type}</p>
                            <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
                        </div>
                    ))}
                </div>

                <h2 className="titulrestaurants">Restaurants</h2>
                <hr />
                <div className="item-list">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <h3>{item.title}</h3>
                            <p>Type: {item.type}</p>
                            <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="movelog">
                    <img className="josep" src={joposep} alt="Logo" />
                </div>
                <p className="titulfoter">Pàgina d'oci John i Josep</p>
            </footer>
        </div>
    );
};

export default PaginaPrincipal;
