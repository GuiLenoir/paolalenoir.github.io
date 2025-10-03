import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Sobre.css'
import fotoQuemSouEu from '../assets/imgs/paola-foto.jpg';

function QuemSouEu() {
  return (
    <>
        <div className="container py-5" id="quem-sou-eu">
            <div className="row align-items-center">

            <div id="foto-quem-sou-eu" className="col-md-5">
            <img src={fotoQuemSouEu} alt="Foto de Paola Lenoir" className="img-fluid rounded-circle border border-2 border-dark"/>
            </div>

            <div id="texto-quem-sou-eu" className="col-md-7 py-5">
            <text className="mb-4">Meu nome é <strong>Paola</strong>, sou <strong>Arquiteta e Urbanista</strong> formada e atuante em Belo Horizonte, Minas Gerais.
Apaixonada por criar espaços que unem funcionalidade, estética e bem-estar, acredito que a arquitetura vai muito além do projeto: ela transforma realidades, valoriza a vida cotidiana e contribui para cidades mais humanas e sustentáveis.</text>
            </div>

           </div>
        </div>
    </>
  )}

  export default QuemSouEu