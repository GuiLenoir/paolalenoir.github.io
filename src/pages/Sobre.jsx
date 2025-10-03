import React from "react"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../components/Sobre.css'
import BannerSobre from '../components/BannerSobre'
import QuemSouEu from "../components/QuemSouEu";
import Formacao from "../components/Formacao";
import VisaoValores from "../components/VisaoValores";
import FormaDeTrabalho from "../components/FormaDeTrabalho";

function Sobre() {
  return (
    <>
      <section id="sobre">
        <BannerSobre />
      </section>
      <section id="quem-sou-eu">
        <QuemSouEu />
        </section>

        <section id="formacao-experiencia">
        <Formacao />
        </section>

        <section id="missao-visao-valores">
        <VisaoValores />
        </section>
        
        <section id="forma-de-trabalho">
        <FormaDeTrabalho />
        </section>
    </>
  )}

  export default Sobre