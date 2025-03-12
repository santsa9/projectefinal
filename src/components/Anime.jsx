import '../App.css';
import joposep from '../imagenes/joj.png';
import { } from 'react-router-dom';

function Anime() {

    const items = [
        { id: 1, title: "Tokyo Ghoul", score: 97, type: "Anime" },
        { id: 2, title: "Death Note", score: 93, type: "Anime" },
        { id: 3, title: "Inuyasha", score: 95, type: "Anime" },
        { id: 4, title: "Bleach", score: 98, type: "Anime" },
        { id: 5, title: "Attack on Titan", score: 96, type: "Anime" },
        ];
    
    return (
        <div className='contenidoprincipal'>
            {/* Contingut principal */}
            <div className="content2">
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

export default Anime;
    