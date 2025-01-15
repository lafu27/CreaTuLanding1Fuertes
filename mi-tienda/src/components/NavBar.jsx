import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img 
            src="/img/logo.png"
            alt="PC Monster Components"
            className="d-inline-block align-text-top"
            style={{ height: '50px' }}
          />
        </a>

        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-light" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Componentes
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item text-light hover-green" href="/procesadores">Procesadores</a></li>
                <li><a className="dropdown-item text-light hover-green" href="/tarjetas-graficas">Tarjetas Gráficas</a></li>
                <li><a className="dropdown-item text-light hover-green" href="/memorias">Memorias RAM</a></li>
                <li><a className="dropdown-item text-light hover-green" href="/placas-madre">Placas Madre</a></li>
                <li><a className="dropdown-item text-light hover-green" href="/almacenamiento">Almacenamiento</a></li>
                <li><a className="dropdown-item text-light hover-green" href="/fuentes">Fuentes de Poder</a></li>
                <li><a className="dropdown-item text-light hover-green" href="/gabinetes">Gabinetes</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/arma-tu-pc">Arma tu PC</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/ofertas">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/soporte">Soporte</a>
            </li>
          </ul>
          
          <form className="d-flex me-3">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar componentes..." 
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;