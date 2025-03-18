import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Usuaricss.css";
import joposep from "../imagenes/joj.png";
import lupa from "../imagenes/lupa.png";
import usuari from "../imagenes/use.png";

const categories = ["Videojocs", "Pel·lícules", "Sèries", "Anime", "Restaurants"];

const reviewData = {
  "Pel·lícules": [
    { title: "Inception", date: "2010-07-16", rating: 4.7, comment: "Gran pel·lícula de ciència-ficció!" },
    { title: "Interstellar", date: "2014-11-07", rating: 4.8, comment: "Increïble i emotiva!" }
  ]
};

const Usuari = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pel·lícules");
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Capçalera */}
      <header className="header">
        <nav className="nav">
          <Link to="/">
            <img className="logo" src={joposep} alt="Logo" />
            <button onClick={() => navigate("/")} className="botologo"></button>
          </Link>
          <a href="/Videojocs">Videojocs</a>
          <a href="/Anime">Anime</a>
          <a href="/Pelis">Pel·lícules</a>
          <a href="/Series">Series</a>
          <a href="/Restaurants">Restaurants</a>
          <div className="fuentebusqueda">
            <input className="busqueda" type="search" style={{ border: "solid 2px slateblue" }} />
            <img className="lupa" src={lupa} alt="Lupa" />
          </div>
          <div className="botoregis">
            <button onClick={() => navigate("/Registre")} className="registre">Registre</button>
            <button className="usuari-btn" onClick={() => navigate("/Usuari")}>
              <img className="logiusuari" src={usuari} alt="Usuari" />
            </button>
          </div>
        </nav>
      </header>
      
      {/* Secció de valoracions */}
      <div className="container">
        <h1>Pere123 (Nom Usuari)</h1>
        <nav className="tabs">
          {categories.map((cat) => (
            <button key={cat} className={selectedCategory === cat ? "active" : ""} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </nav>
        <section className="ratings">
          {reviewData[selectedCategory] ? (
            reviewData[selectedCategory].map((item, index) => (
              <div key={index} className="rating-card">
                <h3>{item.title}</h3>
                <p><strong>Data:</strong> {item.date}</p>
                <p><strong>Valoració:</strong> {item.rating} </p>
                <p>{item.comment}</p>
              </div>
            ))
          ) : (
            <p>No hi ha valoracions en aquesta categoria.</p>
          )}
        </section>

        {/* Gràfic senzill sense Recharts */}
        <h2>Distribució de puntuacions</h2>
        <div className="bar-chart">
          {reviewData[selectedCategory] && reviewData[selectedCategory].map((item, index) => (
            <div key={index} className="bar-container">
              <div className="bar" style={{ width: `${item.rating}%` }}>
                {item.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usuari;
