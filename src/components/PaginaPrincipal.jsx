import '../App.css';
import { Link,useNavigate } from 'react-router-dom';
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';

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

    return (
    <div className="app">
        {/* Capçalera */}
        <header className="header">
            <nav className="nav">
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
            </nav>
        </header>

        {/* Contingut principal */}
        <main className="content">
            <h2 className="tituljocs">Videojocs</h2>
            <hr />
            <iframe className="zelda" width="17%" height="190" src="https://www.youtube.com/embed/ofH5ptn5w-A?si=QJPvNLbnkS1Kevpc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
        </main>

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
