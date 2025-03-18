import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Usuaricss.css";
import joposep from "../imagenes/joj.png";
import lupa from "../imagenes/lupa.png";
import usuari from "../imagenes/use.png";

const categories = ["Videojocs", "Pel·lícules", "Sèries", "Anime", "Restaurants"];

const reviewData = {
  "Videojocs": [
    { title: "Sekiro: Shadows Die Twice", date: "2019-03-22", rating: 92, communityAvg: 87, comment: "Un dels millors jocs d'acció!" },
    { title: "Sekiro: Shadows Die Twice", date: "2019-03-22", rating: 64, communityAvg: 87, comment: "Molt difícil, però gratificant." }
  ],
  "Pel·lícules": [
    { title: "Inception", date: "2010-07-16", rating: 88, communityAvg: 85, comment: "Gran pel·lícula de ciència-ficció!" },
    { title: "Interstellar", date: "2014-11-07", rating: 95, communityAvg: 90, comment: "Increïble i emotiva!" }
  ]
};

const getColor = (rating) => {
  if (rating >= 80) return "green";
  if (rating >= 50) return "orange";
  return "red";
};

const Usuari = () => {
  const [selectedCategory, setSelectedCategory] = useState("Videojocs");
  const navigate = useNavigate();

  const userReviews = reviewData[selectedCategory] || [];
  const totalReviews = userReviews.length;
  const bestRating = userReviews.length ? Math.max(...userReviews.map(r => r.rating)) : "N/A";
  const worstRating = userReviews.length ? Math.min(...userReviews.map(r => r.rating)) : "N/A";
  const avgRating = userReviews.length ? (userReviews.reduce((sum, r) => sum + r.rating, 0) / userReviews.length).toFixed(0) : "N/A";

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/">
            <img className="logo" src={joposep} alt="Logo" />
          </Link>
          {categories.map(cat => <a key={cat} href={`/${cat}`}>{cat}</a>)}
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
      
      <div className="container">
        <h1>Pere123 (Nom Usuari)</h1>
        <nav className="tabs">
          {categories.map(cat => (
            <button key={cat} className={selectedCategory === cat ? "active" : ""} onClick={() => setSelectedCategory(cat)}>
              {cat} ({reviewData[cat]?.length || 0})
            </button>
          ))}
        </nav>
        
        <div className="stats">
          <h2>Mitjana de puntuacions</h2>
          <div className="avg-rating" style={{
            width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            backgroundColor: getColor(avgRating), color: "white", fontSize: "24px", fontWeight: "bold",
            animation: "pulse 1.5s infinite alternate"
          }}>
            {avgRating}
          </div>
          <p><strong>Total valoracions:</strong> {totalReviews}</p>
          <p><strong>Millor puntuació:</strong> {bestRating}</p>
          <p><strong>Pitjor puntuació:</strong> {worstRating}</p>
        </div>
        
        <section className="ratings">
          {userReviews.length ? userReviews.map((item, index) => (
            <div key={index} className="rating-card">
              <h3>{item.title}</h3>
              <div className="rating-circle" style={{
                width: "50px", height: "50px", borderRadius: "50%",
                backgroundColor: getColor(item.rating), color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px", fontWeight: "bold",
                animation: "pulse 1.5s infinite alternate"
              }}>
                {item.rating}
              </div>
              <p><strong>Mitjana Comunitat:</strong> {item.communityAvg}</p>
              <p><strong>Data:</strong> {item.date}</p>
              <p>{item.comment}</p>
            </div>
          )) : (
            <p>No hi ha valoracions en aquesta categoria.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Usuari;