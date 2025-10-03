import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Sobre.css'

function Formacao() {
  return (
    <>
        <div className="bg-light">
            <div className="container py-5">
                <div className="row">
                    {/* Coluna de Formação */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="mb-4 text-center">Formação Acadêmica</h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <h5>Arquiteta e Urbanista</h5>
                                <p className="text-muted mb-0">Universidade Federal de Minas Gerais (UFMG) | 2015 - 2020</p>
                            </li>
                            <li className="mb-3">
                                <h5>Mestrado em Design de Interiores</h5>
                                <p className="text-muted mb-0">Escola de Design de Milão | 2021 - 2022</p>
                            </li>
                        </ul>
                    </div>
                    {/* Coluna de Experiência */}
                    <div className="col-lg-6">
                        <h2 className="mb-4 text-center">Experiência Profissional</h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <h5>Arquiteta Pleno</h5>
                                <p className="text-muted mb-0">Escritório de Arquitetura XYZ | 2022 - Presente</p>
                            </li>
                            <li className="mb-3">
                                <h5>Arquiteta Júnior</h5>
                                <p className="text-muted mb-0">Construtora ABC | 2020 - 2021</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )}

  export default Formacao