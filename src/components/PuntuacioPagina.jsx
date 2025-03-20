import '../App.css';
import ReactPlayer from 'react-player'
import joposep from '../imagenes/joj.png';
import swit from '../imagenes/switch.png';
import zelda from '../imagenes/logozelda.png';
import { } from 'react-router-dom';
import { useState } from 'react';

function PuntuacioPagina() {

    const VidUrl="https://youtu.be/sjxLF4IYnJc?si=xEu3PzLgB4h76uSg";

    const [userScore, setUserScore] = useState(''); // Estado para almacenar la puntuación del usuario

    const handleScoreChange = (event) => {
        let value = event.target.value;
        // Validar que la puntuación sea un número entre 0 y 100
        if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
            setUserScore(value);
        }
    };

    return (
        <div className='contenidoprincipalpuntuacio'>
            {/* Contingut principal */}
            <div className="contenidopunts">
                <div className='diseñopuntuacio'>
                    <div className='paginaPunt'>
                        <ReactPlayer
                            url={VidUrl}
                            playing={false}
                            volume={0.5}
                            width={"900px"}
                            height={"550px"}
                            loop
                        />
                    </div>
                    <div className='titulzelda'>
                        <p className='movetitul'><h3>The Legend of Zelda: Thears of the kingdom</h3></p>
                        <div className='extren'>
                            <img src={zelda} alt='logo zelda' style={{width:"140px",height:"100px"}} />
                            <div className='extren2'>
                                <img className='logoswitch' src={swit} alt='nintendo switch' style={{width:"140px",height:"40px",marginTop:"-10px"}}></img>
                                <hr style={{width:"125px"}}></hr>
                                <p className='dataextreno'>D/ 5.12.2023</p>
                            </div>
                        </div>
                        <hr className='lenea'></hr>
                        <div className='modtext'>
                            <p className='metascore'>PUNTUACIO</p>
                            <p className='favorable'>Molt Favorable</p>
                            <div className='numeropunt'><p className='calificaionum'>97</p></div>
                            <div className='valorgood'>
                                <div className='green'></div>
                                <div className='orange'></div>
                                <div className='red'></div>
                            </div>
                        </div>
                        <div className='regispunt'>
                            <p className='calificatu'>USER PUNTUACIO</p>
                            <input
                                type="number"
                                value={userScore}
                                onChange={handleScoreChange}
                                placeholder="Enter your score (0-100)"
                                min="0"
                                max="100"
                                className="input-score"
                            />
                            {userScore && <p className='user-score-display'>Tu puntuación: {userScore}</p>}
                        </div>
                    </div>
                </div>
                <div className='comentarismenu'>
                    <div className='alicomentaris'>
                        COMENTARIS
                    </div>
                </div>
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
