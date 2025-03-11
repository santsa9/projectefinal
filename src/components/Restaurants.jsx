import '../App.css';
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';
import { Link,useNavigate } from 'react-router-dom';

function Restaurants() {

    const items = [
        { id: 1, title: "La Cabana", score: 97, type: "Restaurant" },
        { id: 2, title: "Cal Negre", score: 93, type: "Restaurant" },
        { id: 3, title: "El Santuari", score: 95, type: "Restaurant" },
        { id: 4, title: "La Nota", score: 98, type: "Restaurant" },
        { id: 5, title: "El Rincón Gallego", score: 96, type: "Restaurant" },
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
                <Link to="/videojocs">Videojocs</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/pelis">Pel·lícules</Link>
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
                <button className="usuari-btn" onClick={() => navigate("/Usuari")}>
                    <img className="logiusuari" src={usuari} alt="Usuari" />
                </button>
                </div>
            </div>
            {/* Contingut principal */}
            <div className="content2">
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

export default Restaurants;
    