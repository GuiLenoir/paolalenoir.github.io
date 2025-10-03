import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Orcamento() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        tipoProjeto: 'Residencial',
        tipoServico: 'Projeto Completo',
        area: '',
        detalhes: ''
    });

    const handleChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você integraria com um serviço de email ou backend
        console.log("Formulário Enviado:", formData);
        alert(`Obrigado, ${formData.nome}! Seu pedido de orçamento foi enviado com sucesso.`);
        setStep(4); // Vai para a tela de agradecimento
    };

    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h4 className="mb-4">1. Informações de Contato</h4>
                        <div className="mb-3">
                            <label className="form-label">Nome Completo</label>
                            <input type="text" className="form-control" value={formData.nome} onChange={handleChange('nome')} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={formData.email} onChange={handleChange('email')} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefone / WhatsApp</label>
                            <input type="tel" className="form-control" value={formData.telefone} onChange={handleChange('telefone')} />
                        </div>
                        <button onClick={nextStep} className="btn btn-dark w-100 mt-3">Próximo</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h4 className="mb-4">2. Sobre o Projeto</h4>
                        <div className="mb-3">
                            <label className="form-label">Tipo de Projeto</label>
                            <select className="form-select" value={formData.tipoProjeto} onChange={handleChange('tipoProjeto')}>
                                <option>Residencial</option>
                                <option>Comercial</option>
                                <option>Corporativo</option>
                                <option>Reforma</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Área Aproximada (m²)</label>
                            <input type="number" className="form-control" value={formData.area} onChange={handleChange('area')} />
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <button onClick={prevStep} className="btn btn-secondary">Anterior</button>
                            <button onClick={nextStep} className="btn btn-dark">Próximo</button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h4 className="mb-4">3. Detalhes Adicionais</h4>
                        <div className="mb-3">
                            <label className="form-label">Descreva o que você precisa</label>
                            <textarea className="form-control" rows="6" value={formData.detalhes} onChange={handleChange('detalhes')} placeholder="Ex: Gostaria de reformar meu apartamento de 2 quartos, focando na cozinha e sala de estar..."></textarea>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <button onClick={prevStep} className="btn btn-secondary">Anterior</button>
                            <button type="submit" className="btn btn-success">Enviar Pedido</button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="text-center">
                        <i className="bi bi-check-circle-fill text-success display-3 mb-3"></i>
                        <h3>Obrigado!</h3>
                        <p className="lead">Seu pedido de orçamento foi recebido. Entraremos em contato em breve!</p>
                        <Link to="/" className="btn btn-dark mt-3">Voltar para a Home</Link>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9">
                    <div className="text-center mb-5">
                        <h1 className="display-5 ">Solicitar Orçamento</h1>
                        <p className="lead text-muted">Preencha as etapas abaixo para iniciarmos a conversa sobre seu projeto.</p>
                    </div>
                    <div className="card p-4 p-md-5">
                        <form onSubmit={handleSubmit}>
                            {renderForm()}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orcamento;