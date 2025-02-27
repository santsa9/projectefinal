import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Usuaricss.css';
import joposep from "../imagenes/joj.png";
import lupa from "../imagenes/lupa.png";
import usuari from "../imagenes/use.png";

const categories = ["Videojocs", "Pel·lícules", "Sèries", "Anime", "Restaurants"];

const ratings = {
  "Pel·lícules": [
    { title: "Títol peli 1", date: "01/01/2025", rating: "⭐⭐⭐⭐", comment: "Molt bona!" },
    { title: "Títol peli 2", date: "15/02/2025", rating: "⭐⭐⭐", comment: "Podria ser millor." }
  ],
  "Videojocs": [],
  "Sèries": [],
  "Anime": [],
  "Restaurants": []
};

const Usuari = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pel·lícules");
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Capçalera */}
      <header className="header">
        <nav className="nav">
          <button onClick={() => navigate("/")} className="botologo">
            <img className="logo" src={joposep} alt="Logo" />
          </button>
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

      {/* Contingut Principal */}
      <div className="container">
        <aside className="sidebar">
          <h2>El meu perfil</h2>
          <button className="sidebar-btn">Les meves valoracions</button>
          <button className="sidebar-btn">El meu compte</button>
          <button className="sidebar-btn">Tancar la sessió</button>
        </aside>

        <main className="content">
          <h1>Les meves valoracions</h1>
          <nav className="tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>

          <section className="ratings">
            {ratings[selectedCategory].length > 0 ? (
              ratings[selectedCategory].map((item, index) => (
                <div key={index} className="rating-card">
                  <h3>{item.title}</h3>
                  <p><strong>Data:</strong> {item.date}</p>
                  <p><strong>Valoració:</strong> {item.rating}</p>
                  <p>{item.comment}</p>
                </div>
              ))
            ) : (
              <p>No hi ha valoracions en aquesta categoria.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Usuari;
