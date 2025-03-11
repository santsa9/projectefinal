import '../App.css';
import ReactPlayer from 'react-player'
import joposep from '../imagenes/joj.png';
import lupa from '../imagenes/lupa.png';
import usuari from '../imagenes/use.png';
import { Link,useNavigate } from 'react-router-dom';

function PuntuacioPagina() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/"); // Redirige a la página principal
    };

    const Registre = () => {
        navigate("/Registre")
    };

    const VidUrl="https://youtu.be/sjxLF4IYnJc?si=xEu3PzLgB4h76uSg"

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
            <div className='botoregis'>
                <button className='registre'>Registre</button>
                <img className='logiusuari' src={usuari}></img>
            </div>

            {/* Footer */}
            <footer className="footerpuntuacio">
                <div className="movelog">
                    <img className="josep" src={joposep} alt="Logo" />
                </div>
                <p className="titulfoter">Pàgina d'oci John i Josep</p>
            </footer>
        </div>
    );
};

export default PuntuacioPagina;

