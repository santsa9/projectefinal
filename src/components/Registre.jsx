import '../App.css';
import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import joposep from '../imagenes/joj.png';

export default function AuthForm() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/"); // Redirige a la página principal
    };

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container">
      <div className="form-box">
        <Link to="/">
            <img className="logo_registre" src={joposep} alt="Logo" />
            <button onClick={handleRedirect} className='botologo'></button>
        </Link>
        <div className="tab-menu">
          <a href="#" className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Registra’t</a>
          <a href="#" className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Inicia sessió</a>
        </div>
        <p className="description">
          {isLogin ? "Ingresa les teves dades per a iniciar sessió i poder opinar." : "Ingresa les teves dades per a crear un compte i poder opinar."}
        </p>
        <div className="input-group">
          <label>Correu electrònic</label>
          <input type="email" className="input-field" />
        </div>
        {!isLogin && (
          <div className="input-group">
            <label>Nom d’usuari</label>
            <input type="text" className="input-field" />
            <p className="info-text">15 characters max, letters and numbers only</p>
          </div>
        )}
        <div className="input-group">
          <label>Contrasenya</label>
          <input type="password" className="input-field" />
          <p className="info-text">Must be at least 6 characters with 1 number and special character</p>
        </div>
        <button className="submit-btn">{isLogin ? "Inicia sessió" : "Registra’t"}</button>
        {isLogin && <p className="forgot-password">Has oblidat la contrasenya?</p>}
      </div>
    </div>
  );
}
