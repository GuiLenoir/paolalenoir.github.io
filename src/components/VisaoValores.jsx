import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Sobre.css'

function VisaoValores() {
  return (
    <>
        <div className="container py-5">
            <h2 className="text-center mb-5">Filosofia de Trabalho</h2>
            <div className="row text-center">
                <div className="col-md-4 mb-4">
                    <i className="bi bi-bullseye fs-1 text-dark mb-3"></i>
                    <h3>Missão</h3>
                    <p className="text-muted">Criar projetos arquitetônicos que unem estética, funcionalidade e sustentabilidade, transformando os sonhos dos clientes em realidade.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <i className="bi bi-eye-fill fs-1 text-dark mb-3"></i>
                    <h3>Visão</h3>
                    <p className="text-muted">Ser referência em arquitetura inovadora e consciente, reconhecida pela excelência no design e pela satisfação total do cliente.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <i className="bi bi-gem fs-1 text-dark mb-3"></i>
                    <h3>Valores</h3>
                    <p className="text-muted">Compromisso, criatividade, transparência, qualidade e respeito ao meio ambiente são os pilares que guiam cada projeto.</p>
                </div>
            </div>
        </div>
    </>
  )}

  export default VisaoValores