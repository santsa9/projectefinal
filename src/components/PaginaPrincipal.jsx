import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='contenidoprincipal'>
            <div className="content2">
                <h2 className="titulpeli">Pel·lícules Populars</h2>
                <hr />
                <div className='contentpelis'>
                    <Slider {...settings}>
                        {movies.map((movie) => (
                            <div key={movie.id} className="item">
                                <h3>{movie.title}</h3>
                                <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <p>Valoració: {movie.vote_average}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
    
                <h2 className="titulseries">Sèries Populars</h2>
                <hr />
                <div className='contentseries'>
                    <Slider {...settings}>
                        {tvShows.map((show) => (
                            <div key={show.id} className="item">
                                <h3>{show.name}</h3>
                                <img className="poster" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
                                <p>Valoració: {show.vote_average}</p>
                            </div>
                        ))}
                    </Slider>
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