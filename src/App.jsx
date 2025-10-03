//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop.jsx';

import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import Projetos from './pages/Projetos.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Duvidas from './pages/Duvidas.jsx';
import Orcamento from './pages/Orcamento.jsx'


function App() {


  return (
    <BrowserRouter>
    <ScrollTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Projetos" element={<Projetos />} />
      <Route path="/Contato" element={<Contato />} />
      <Route path="/Duvidas" element={<Duvidas />} />
      <Route path="/Orcamento" element={<Orcamento />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App
