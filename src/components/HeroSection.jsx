import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css'; // opcional para estilos personalizados
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import bgImage1 from '../assets/imgs/areagourmet-1.png';
import bgImage2 from '../assets/imgs/areagourmet-2.png'; // Imagem de exemplo
import bgImage3 from '../assets/imgs/backgroundnoite-1.png'; // Imagem de exemplo

const backgroundImages = [bgImage1, bgImage2, bgImage3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 2. Cria um temporizador para trocar de imagem a cada 5 segundos
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 7500); // 5000ms = 5 segundos

    // 3. Limpa o temporizador quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* 4. Mapeia as imagens para criar os divs de fundo */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="hero-background"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0 // Mostra apenas a imagem ativa
          }}
        />
      ))}
      
      {/* O conteúdo fica sobre os fundos */}
      <div className="hero-content d-flex align-items-center justify-content-center text-center">
        <div className="masking-container">
          <h1 id="TituloHero">PAOLA LENOIR</h1>
          <div className=''>
            <p id="SubTituloHero">Arquitetura e Urbanismo</p>
          </div>
          <Link to="/projetos" className="btn btn-dark border mt-4 px-4 py-2">PROJETOS</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
