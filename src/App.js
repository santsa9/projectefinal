import React from 'react';
import './App.css';

const App = () => {
  const items = [
    { id: 1, title: "Attack on Titan", score: 97, type: "Anime" },
    { id: 2, title: "El Santuari", score: 89, type: "Restaurant" },
    { id: 3, title: "Breaking Bad", score: 95, type: "Serie" },
    { id: 4, title: "The Godfather", score: 98, type: "Pel·lícula" },
    { id: 5, title: "Red Dead Redemption 2", score: 96, type: "Videojoc" },
  ];

  return (
    <div className="app">
      {/* Capçalera */}
      <header className="header">
        <nav className="nav">
          <alogo href="#games">afegir logo</alogo>
          <a href="#games">Videojocs</a>
          <a href="#games">Anime</a>
          <a href="#movies">Pel·lícules</a>
          <a href="#tv-shows">Series</a>
          <a href="#games">Restaurants</a>
          <abuscador href="#games">afegirbuscador</abuscador>
          <aregistre href="#games">afegirregistre</aregistre>
        </nav>
      </header>

      {/* Contingut principal */}
      <main className="content">
        <h2>Videojocs</h2>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>Type: {item.type}</p>
              <div className={`score ${item.score >= 50 ? "high" : "low"}`}>{item.score}</div>
            </div>
          ))}
        </div>
        <h2>Anime</h2>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>Type: {item.type}</p>
              <div className={`score ${item.score >= 50 ? "high" : "low"}`}>{item.score}</div>
            </div>
          ))}
        </div>
        <h2>Pel·lícules</h2>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>Type: {item.type}</p>
              <div className={`score ${item.score >= 50 ? "high" : "low"}`}>{item.score}</div>
            </div>
          ))}
        </div>
        <h2>Series</h2>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>Type: {item.type}</p>
              <div className={`score ${item.score >= 50 ? "high" : "low"}`}>{item.score}</div>
            </div>
          ))}
        </div>
        <h2>Restaurants</h2>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>Type: {item.type}</p>
              <div className={`score ${item.score >= 50 ? "high" : "low"}`}>{item.score}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Pàgina d'oci John i Josep</p>
      </footer>
    </div>
  );
};

export default App;
