import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Sobre.css'

function CardsProjetos({ image, title, description, onShowDetails }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      {/* Adicionamos a classe 'card-projeto' para o efeito de hover */}
      <div className="card h-100 card-projeto border-1  border-dark">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* O botão agora chama a função passada via props */}
          <button onClick={onShowDetails} className="btn btn-dark mt-auto">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

  export default CardsProjetos