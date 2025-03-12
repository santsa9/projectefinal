import '../App.css';
import joposep from '../imagenes/joj.png';
import { } from 'react-router-dom';

function Restaurants() {

    const items = [
        { id: 1, title: "La Cabana", score: 97, type: "Restaurant" },
        { id: 2, title: "Cal Negre", score: 93, type: "Restaurant" },
        { id: 3, title: "El Santuari", score: 95, type: "Restaurant" },
        { id: 4, title: "La Nota", score: 98, type: "Restaurant" },
        { id: 5, title: "El Rincón Gallego", score: 96, type: "Restaurant" },
        ];

    
    return (
        <div className='contenidoprincipal'>
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
    
