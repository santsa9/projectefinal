import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Usuaricss.css";
import joposep from "../imagenes/joj.png";
import lupa from "../imagenes/lupa.png";
import usuari from "../imagenes/use.png";

const categories = ["Videojocs", "Pel·lícules", "Sèries", "Anime", "Restaurants"];

const reviewData = {
  "Videojocs": [
    { id: 1, title: "The Legend of Zelda", date: "2024-03-10", rating: 4.8, image: "zelda.jpg" },
    { id: 2, title: "Elden Ring", date: "2023-02-25", rating: 4.9, image: "eldenring.jpg" }
  ],
  "Pel·lícules": [
    { id: 1, title: "Inception", date: "2010-07-16", rating: 4.7, image: "inception.jpg" },
    { id: 2, title: "Interstellar", date: "2014-11-07", rating: 4.8, image: "interstellar.jpg" }
  ],
  "Sèries": [
    { id: 1, title: "Breaking Bad", date: "2008-01-20", rating: 4.9, image: "breakingbad.jpg" },
    { id: 2, title: "Game of Thrones", date: "2011-04-17", rating: 4.5, image: "got.jpg" }
  ],
  "Anime": [
    { id: 1, title: "Attack on Titan", date: "2013-04-06", rating: 4.9, image: "aot.jpg" },
    { id: 2, title: "Death Note", date: "2006-10-03", rating: 4.8, image: "deathnote.jpg" }
  ],
  "Restaurants": [
    { id: 1, title: "El Celler de Can Roca", date: "2024-02-01", rating: 5.0, image: "canroca.jpg" },
    { id: 2, title: "Disfrutar", date: "2023-12-15", rating: 4.9, image: "disfrutar.jpg" }
  ]
};

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

const Reviews = ({ selectedCategory }) => {
  const reviews = reviewData[selectedCategory] || [];

  return (
    <div>
      <h2>{selectedCategory}</h2>
      <div className="review-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <img src={`../imagenes/${review.image}`} alt={review.title} className="review-image" />
            <div className="review-info">
              <h3>{review.title}</h3>
              <p>Data: {review.date}</p>
              <p>Valoració: ⭐ {review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
