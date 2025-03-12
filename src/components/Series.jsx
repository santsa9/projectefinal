import '../App.css';
import joposep from '../imagenes/joj.png';
import { } from 'react-router-dom';

function Series() {

    const items = [
        { id: 1, title: "El Joc del Calamar", score: 97, type: "TV Show" },
        { id: 2, title: "The Punisher", score: 93, type: "TV Show" },
        { id: 3, title: "Breaking Bad", score: 95, type: "TV Show" },
        { id: 4, title: "The Godfather", score: 98, type: "TV Show" },
        { id: 5, title: "The Handmaid tale", score: 96, type: "TV Show" },
        ];
    
    return (
        <div className='contenidoprincipal'>
            {/* Contingut principal */}
            <div className="content2">
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

export default Series;
    