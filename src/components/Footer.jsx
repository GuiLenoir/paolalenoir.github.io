import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">Paola Lenoir</h5>
            <p>
              Arquiteta e Urbanista apaixonada por criar espaços que unem funcionalidade, estética e bem-estar.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Navegação</h5>
            <p><Link to="/" className="text-white">Home</Link></p>
            <p><Link to="/sobre" className="text-white">Sobre</Link></p>
            <p><Link to="/projetos" className="text-white">Projetos</Link></p>
            <p><Link to="/contato" className="text-white">Contato</Link></p>
            <p><Link to="/duvidas" className="text-white">Duvidas</Link></p>

         
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Contato</h5>
            <p><i className="bi bi-geo-alt-fill me-3"></i>Belo Horizonte, MG</p>
            <p><i className="bi bi-envelope-fill me-3"></i>contato@paolaarq.com</p>
            <p><i className="bi bi-telephone-fill me-3"></i>(31) 99999-9999</p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              © 2025 Copyright:
              <a href="#" className="text-white" style={{textDecoration: 'none'}}><strong> Paola Lenoir Arquitetura</strong></a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
                <a href="https://www.instagram.com/arq.pl/" target='blank' rel="noopener noreferrer" className="btn btn-outline-light btn-floating m-1"><i className="bi bi-instagram"></i></a>
                <a href="" className="btn btn-outline-light btn-floating m-1" target='blank' rel="noopener noreferrer"> <i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;