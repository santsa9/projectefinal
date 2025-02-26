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

const App = () => {
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
