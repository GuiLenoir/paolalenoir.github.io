import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import paolalenoirlogo from '../assets/imgs/logo paola site.png'

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom px-4 py-3">
      <Link className="navbar-brand fw-light mx-lg-5 mx-md-5" to="/"><img src={paolalenoirlogo}  className='logopaola' alt="Paola Lenoir" /></Link>
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

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-3 align-items-lg-center text-center my-md-4 my-lg-0">
          <li className="nav-item my-2 my-lg-0">
            <Link className="nav-link-custom-botao" to="/Projetos">Projetos</Link>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <Link className="nav-link-custom-botao" to="/Sobre">Sobre</Link>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <Link className="nav-link-custom-botao" to="/Contato">Contato</Link>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <Link className="nav-link-custom-botao" to="/Duvidas">Duvidas</Link>
          </li>
          <li className="nav-item ms-lg-2">
            <Link className="btn btn-dark" id="orcamentobotao" to="/orcamento">Solicitar Orçamento</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
