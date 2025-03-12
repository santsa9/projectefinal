import '../App.css';
import joposep from '../imagenes/joj.png';
import { useNavigate } from 'react-router-dom';

function Videojocs() {

    const items = [
        { id: 1, title: "The Legend of Zelda: Breath of the Wild", score: 97, type: "Game" },
        { id: 2, title: "The Last of Us Part II", score: 93, type: "Game" },
        { id: 3, title: "Hades", score: 95, type: "Game" },
        { id: 4, title: "God of War", score: 98, type: "Game" },
        { id: 5, title: "Red Dead Redemption 2", score: 96, type: "Game" },
    ];
    
    const navigate = useNavigate();
    
    const Puntos = () => {
        navigate("/Puntuacio");
    };

    return (
        <div className='contenidoprincipal'>
            {/* Contingut principal */}
            <div className="content2">
                <h2 className="tituljocs">Videojocs</h2>
                <hr />
                <div className='paginaPunt'>
                    <button onClick={Puntos} className="botopuntos"></button>
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

export default Videojocs;

