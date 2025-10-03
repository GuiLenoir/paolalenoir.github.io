import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  './Sobre.css'

function FormaDeTrabalho() {
  return (
    <>
         <div className="bg-light">
            <div className="container py-5">
                <h2 className="text-center mb-5">Como Funciona o Processo</h2>
                <div className="row">
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 border rounded h-100">
                            <i className="bi bi-chat-dots-fill fs-1 text-dark mb-3"></i>
                            <h5>1. Briefing</h5>
                            <p className="small text-muted">Conversa inicial para entender suas necessidades, desejos e o escopo do projeto.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 border rounded h-100">
                            <i className="bi bi-pencil-square fs-1 text-dark mb-3"></i>
                            <h5>2. Estudo Preliminar</h5>
                            <p className="small text-muted">Desenvolvimento dos primeiros esboços e plantas para visualização das ideias.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 border rounded h-100">
                            <i className="bi bi-file-earmark-check-fill fs-1 text-dark mb-3"></i>
                            <h5>3. Projeto Executivo</h5>
                            <p className="small text-muted">Detalhamento técnico completo do projeto, com todas as especificações para a obra.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 border rounded h-100">
                            <i className="bi bi-building-fill-check fs-1 text-dark mb-3"></i>
                            <h5>4. Acompanhamento</h5>
                            <p className="small text-muted">Visitas à obra para garantir que a execução esteja alinhada com o projeto aprovado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )}

  export default FormaDeTrabalho