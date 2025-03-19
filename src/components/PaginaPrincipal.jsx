import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import joposep from '../imagenes/joj.png';

function PaginaPrincipal() {
    const API_KEY = "d1cc6da1767d3eb31de916841bb25fb4";
    const navigate = useNavigate();
    
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ca-ES&page=1`);
            const data = await res.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Error carregant les pel·lícules:", error);
        }
    };

    const fetchTVShows = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ca-ES&page=1`);
            const data = await res.json();
            setTvShows(data.results);
        } catch (error) {
            console.error("Error carregant les sèries:", error);
        }
    };

    useEffect(() => {
        Promise.all([fetchMovies(), fetchTVShows()]).then(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <h2>Carregant dades...</h2>;
    }

    return (
        <div className='contenidoprincipal'>
            <div className="content2">
                <h2 className="tituljocs">Videojocs</h2>
                <hr />
                <div className='paginaPunt'>
                    <div className='PrimerJoc'
                        onMouseEnter={() => setIsPlaying(true)} 
                        onMouseLeave={() => setIsPlaying(false)}
                    >
                        <button onClick={Puntos} className="botopuntos"></button>
                        <ReactPlayer
                            url={VidUrl}
                            playing={isPlaying}
                            volume={0.5}
                            width={245}
                            height={180}
                            style={{borderRadius:"20px"}}
                            loop
                        />
                    </div>
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

                <h2 className="titulanime">Anime</h2>
                <hr />
                <div className="item-list">
                    {movies.map((movie) => (
                        <div key={movie.id} className="item">
                            <h3>{movie.title}</h3>
                            <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <p>Valoració: {movie.vote_average}</p>
                        </div>
                    ))}
                </div>

                <h2 className="titulseries">Sèries Populars</h2>
                <hr />
                <div className="item-list">
                    {tvShows.map((show) => (
                        <div key={show.id} className="item">
                            <h3>{show.name}</h3>
                            <img className="poster" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
                            <p>Valoració: {show.vote_average}</p>
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
}

export default PaginaPrincipal;
