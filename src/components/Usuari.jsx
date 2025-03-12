import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Usuaricss.css";
import joposep from "../imagenes/joj.png";
import lupa from "../imagenes/lupa.png";
import usuari from "../imagenes/use.png";

const categories = ["Videojocs", "Pel·lícules", "Sèries", "Anime", "Restaurants"];

const Profile = () => (
  <div>
    <h2>El meu compte</h2>
    <p>Correu electrònic: usuari@example.com</p>
    <label>
      Nova contrasenya:
      <input type="password" placeholder="Canvia la teva contrasenya" />
    </label>
    <button>Actualitzar</button>
  </div>
);

const Reviews = ({ selectedCategory }) => (
  <div>
    <h2>{selectedCategory}</h2>
    <p>Contingut de {selectedCategory}</p>
  </div>
);

const Usuari = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pel·lícules");
  const [activeSection, setActiveSection] = useState("reviews");
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/">
            <img className="logo" src={joposep} alt="Logo" />
            <button onClick={handleRedirect} className="botologo"></button>
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

      <div className="containerusuari">
        <aside className="sidebar">
          <h2>El meu perfil</h2>
          <button className="sidebar-btn" onClick={() => setActiveSection("reviews")}>Les meves valoracions</button>
          <button className="sidebar-btn" onClick={() => setActiveSection("profile")}>El meu compte</button>
          <button className="sidebar-btn">Tancar la sessió</button>
        </aside>

        <main className="content">
          {activeSection === "reviews" ? (
            <>
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
              <Reviews selectedCategory={selectedCategory} />
            </>
          ) : (
            <Profile />
          )}
        </main>
      </div>
    </div>
  );
};

export default Usuari;
