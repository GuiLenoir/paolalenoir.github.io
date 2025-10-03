import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Duvidas.css';

// Array com as perguntas e respostas para facilitar a manutenção
const faqData = [
  {
    id: '1',
    question: 'Quais são as etapas de um projeto de arquitetura?',
    answer: 'Nosso processo é dividido em quatro etapas principais: 1. Briefing (entendimento das suas necessidades), 2. Estudo Preliminar (primeiros esboços), 3. Projeto Executivo (detalhamento técnico) e 4. Acompanhamento da Obra para garantir a fidelidade ao projeto.'
  },
  {
    id: '2',
    question: 'Quanto tempo leva para concluir um projeto?',
    answer: 'O tempo varia muito dependendo da complexidade e do tamanho do projeto. Um projeto de interiores pode levar de 1 a 3 meses, enquanto uma construção residencial completa pode levar mais de um ano. Após a reunião de briefing, fornecemos uma estimativa mais precisa.'
  },
  {
    id: '3',
    question: 'Você trabalha com projetos online ou apenas presenciais?',
    answer: 'Oferecemos ambas as modalidades. Para clientes em Belo Horizonte e região, realizamos todo o processo presencialmente. Para clientes em outras localidades, temos um processo de projeto online bem estruturado, com reuniões por vídeo e compartilhamento de materiais digitais.'
  },
  {
    id: '4',
    question: 'Qual o custo de um projeto de arquitetura?',
    answer: 'O custo é calculado com base na área do projeto (m²) e na complexidade dos serviços solicitados. Entre em contato para conversarmos sobre seu projeto e prepararmos um orçamento personalizado sem compromisso.'
  },
  {
    id: '5',
    question: 'É possível contratar apenas o acompanhamento da obra?',
    answer: 'Sim, oferecemos o serviço de acompanhamento e gerenciamento de obras, mesmo que o projeto não tenha sido desenvolvido por nosso escritório. Garantimos que a execução siga as melhores práticas e o padrão de qualidade esperado.'
  }
];

function DuvidasFrequentes() {
  return (
    <section>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-5">Dúvidas Frequentes</h1>
          <p className="lead text-muted">Respostas para as perguntas mais comuns sobre nossos serviços.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* O componente Accordion gerencia o estado de abrir/fechar */}
            <Accordion defaultActiveKey="0" flush>
              {faqData.map(item => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DuvidasFrequentes;