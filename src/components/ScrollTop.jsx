import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  // Extrai o 'pathname' (ex: "/sobre") do objeto de localização
  const { pathname } = useLocation();

  // Executa um efeito sempre que o 'pathname' mudar
  useEffect(() => {
    // Rola a janela para o topo (posição 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // O array de dependências garante que o efeito só rode quando a URL mudar

  return null; // Este componente não precisa renderizar nada
}

export default ScrollTop;