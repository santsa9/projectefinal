import '../App.css';
import { useState } from 'react';

function MenuPrincipal() {

const items = [
    { id: 1, title: "The Legend of Zelda: Breath of the Wild", score: 97, type: "Game" },
    { id: 2, title: "The Last of Us Part II", score: 93, type: "Game" },
    { id: 3, title: "Breaking Bad", score: 95, type: "TV Show" },
    { id: 4, title: "The Godfather", score: 98, type: "Movie" },
    { id: 5, title: "Red Dead Redemption 2", score: 96, type: "Game" },
    ];

    return (
    <div className="app">
        {/* Capçalera */}
        <header className="header">
        <nav className="nav">
            <a href="#games">afegir logo</a>
            <a href="#games">Videojocs</a>
            <a href="#games">Anime</a>
            <a href="#movies">Pel·lícules</a>
            <a href="#tv-shows">Series</a>
            <a href="#games">Restaurants</a>
            <a href="#games">afegirbuscador</a>
            <a href="#games">afegirregistre</a>
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
                <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
            </div>
            ))}
        </div>
        <h2>Anime</h2>
        <div className="item-list">
            {items.map((item) => (
            <div key={item.id} className="item">
                <h3>{item.title}</h3>
                <p>Type: {item.type}</p>
                <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
            </div>
            ))}
        </div>
        <h2>Pel·lícules</h2>
        <div className="item-list">
            {items.map((item) => (
            <div key={item.id} className="item">
                <h3>{item.title}</h3>
                <p>Type: {item.type}</p>
                <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
            </div>
            ))}
        </div>
        <h2>Series</h2>
        <div className="item-list">
            {items.map((item) => (
            <div key={item.id} className="item">
                <h3>{item.title}</h3>
                <p>Type: {item.type}</p>
                <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
            </div>
            ))}
        </div>
        <h2>Restaurants</h2>
        <div className="item-list">
            {items.map((item) => (
            <div key={item.id} className="item">
                <h3>{item.title}</h3>
                <p>Type: {item.type}</p>
                <div className={`score ${item.score >= 90 ? "high" : "low"}`}>{item.score}</div>
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
export default MenuPrincipal;

