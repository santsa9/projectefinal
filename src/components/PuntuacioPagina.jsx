import '../App.css';
import ReactPlayer from 'react-player'
import joposep from '../imagenes/joj.png';
import { } from 'react-router-dom';

function PuntuacioPagina() {

    const VidUrl="https://youtu.be/sjxLF4IYnJc?si=xEu3PzLgB4h76uSg";

    return (
        <div className='contenidoprincipal'>
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
                            style={{borderRadius:"20px"}}
                            loop
                        />
                    </div>
                    <div className='titulzelda'>
                        <p className='movetitul'>The Legend of Zelda: Breath of the Wild</p>
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
