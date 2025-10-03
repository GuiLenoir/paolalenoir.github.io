import React from "react"
import Header from "../components/Header"

function Contato() {
    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1>Entre em Contato</h1>
                        <p className="lead text-muted">Tem alguma dúvida ou quer iniciar um projeto? Me envie uma mensagem!</p>
                    </div>

                    <div className="row justify-content-center">
                        {/* Coluna do Formulário */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="name" placeholder="Seu nome completo" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@email.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Enviar Mensagem</button>
                            </form>
                        </div>

                        {/* Coluna de Informações de Contato */}
                        <div className="col-lg-4 offset-lg-1">
                            <h4>Informações</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    Belo Horizonte, MG, Brasil
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    (31) 99999-9999
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    contato@paolaarq.com
                                </li>
                            </ul>

                            <h4 className="mt-4">Redes Sociais</h4>
                            <div>
                                <a href="#" className="fs-3 me-3 text-dark"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="fs-3 me-3 text-dark"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contato