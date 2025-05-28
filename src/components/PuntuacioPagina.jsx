import '../App.css';
import ReactPlayer from 'react-player'
import joposep from '../imagenes/joj.png';
import swit from '../imagenes/switch.png';
import zelda from '../imagenes/logozelda.png';
import monki from '../imagenes/moniloco.gif';
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

    const [tipoComentario, setTipoComentario] = useState(null);

    const comentarios = [
        { texto: "¡Increíble juego, me encantó!", tipo: "positivo" },
        { texto: "Está bien, pero esperaba más.", tipo: "regular" },
        { texto: "No lo recomiendo, muy aburrido.", tipo: "negativo" },
        { texto: "Gráficos espectaculares y buena jugabilidad.", tipo: "positivo" },
        { texto: "Historia confusa, pero pasable.", tipo: "regular" },
    ];

    const comentariosFiltrados = tipoComentario 
        ? comentarios.filter(c => c.tipo === tipoComentario) 
        : [];

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
                            <p className='numberr'>Puntuaciò 97% Favorables</p>
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
                        <p className='comentariscritics'>CRITICAS USUARIS</p>
                        <hr style={{width:"100%"}}></hr>
                        <div className='criticsrall'>
                            <p className='metascore'>PUNTUACIO</p>
                            <p className='favorable'>Molt Favorable</p>
                            <p className='numberr'>Puntuaciò 97% Favorables</p>
                            <div className='cantitatpunt'>
                                <div className='numeropunt2'><p className='calificaionum2'>97</p>
                                    <div className='colorespunt'>
                                        <div className='green'></div>
                                        <div className='orange'></div>
                                        <div className='red'></div>
                                    </div>
                                    <div className='declaracionspunt'>
                                        <div><p>97% Positive</p></div>
                                        <div><hr style={{position:"relative",height:"40px",top:"12px"}}></hr></div>
                                        <div><p>3% Regulares</p></div>
                                        <div><hr style={{position:"relative",height:"40px",top:"12px"}}></hr></div>
                                        <div><p>0% Negatius</p></div>
                                    </div>
                                    <div className='declaracionspunt2'>
                                        <div><p>345 Reviews</p></div>
                                        <div><p>1 Reviews</p></div>
                                        <div><p>0 Reviews</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='llistareviews'>
                            <div className='botonescoment'>
                                <div className='posi' style={{color:"white",textDecoration:"none",fontFamily:"monospace", fontSize:"15px" ,cursor: "pointer"}} onClick={() => setTipoComentario("positivo")} >Positive Reviews</div>
                                <div className='reg' style={{color:"white",textDecoration:"none",fontFamily:"monospace", fontSize:"15px",marginLeft:"50px" ,cursor: "pointer"}} onClick={() => setTipoComentario("regular")} >Regulars Reviews</div>
                                <div className='nega' style={{color:"white",textDecoration:"none",fontFamily:"monospace", fontSize:"15px",marginLeft:"50px" ,cursor: "pointer"}} onClick={() => setTipoComentario("negativo")} >Negative Reviews</div> 
                            </div>
                            <div className="comentarioscontainer" style={{position: "absolute",top: "50px"}}>
                                {comentariosFiltrados.map((comentario, index) => (
                                    <div key={index} className={`comentario ${comentario.tipo}`}>
                                    <p className="comentario-texto">"{comentario.texto}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
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
            <div className='monki'>
                <img className='mono' src={monki} alt='monki traviezo' ></img>
            </div>
        </div>
    );
};

export default PuntuacioPagina;
