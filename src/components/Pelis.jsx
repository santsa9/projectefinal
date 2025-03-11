import '../App.css';
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';
import { Link,useNavigate } from 'react-router-dom';

function Pelis() {

    const items = [
        { id: 1, title: "Gladiator", score: 97, type: "Anime" },
        { id: 2, title: "Titanic", score: 93, type: "Anime" },
        { id: 3, title: "Sóc Llegenda", score: 95, type: "Anime" },
        { id: 4, title: "King Kong", score: 98, type: "Anime" },
        { id: 5, title: "Avengers: Endgame", score: 96, type: "Anime" },
        ];
    
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/"); // Redirige a la página principal
    };

    const Registre = () => {
        navigate("/Registre")
    };

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
                <button className="usuari-btn" onClick={() => navigate("/Usuari")}>
                    <img className="logiusuari" src={usuari} alt="Usuari" />
                </button>                
            </div>
    
            {/* Contingut principal */}
           
            <h2 className='tituljocs'>Pel·lícules</h2>
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
        </div>

        {/* Footer */}
        <footer className="footer">
            <div className="movelog">
                <img className="josep" src={joposep} alt="Logo" />
            </div>
            <p className="titulfoter">Pàgina d'oci John i Josep</p>
        </footer>
        </div>
    </div>
    );
};

export default Pelis;
    