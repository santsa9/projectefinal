import React from 'react';
import './App.css';
import PaginaPrincipal from './components/PaginaPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Videojocs from './components/Videojocs';
import Anime from './components/Anime';
import Pelis from './components/Pelis';
import Series from './components/Series';
import Restaurants from './components/Restaurants';
import Registre from './components/Registre';
import Usuari from './components/Usuari';

const App = () => {
  const items = [
    { id: 1, title: "Attack on Titan", score: 97, type: "Anime" },
    { id: 2, title: "El Santuari", score: 89, type: "Restaurant" },
    { id: 3, title: "Breaking Bad", score: 95, type: "Serie" },
    { id: 4, title: "The Godfather", score: 98, type: "Pel·lícula" },
    { id: 5, title: "Red Dead Redemption 2", score: 96, type: "Videojoc" },
  ];

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Videojocs" element={<Videojocs />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/Pelis" element={<Pelis />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/Registre" element={<Registre />} />
          <Route path="/Usuari" element={<Usuari />} />
        </Routes>
      </div>
    </Router>
   
  );
};

export default App;
