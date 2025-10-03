import React from "react"
import { useState } from "react"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../components/Projetos.css'
import CardsProjetos from "../components/CardsProjetos"
import ModalProjeto from "../components/ModalProjeto"

//imagems improtadas
import proj1image from '../assets/imgs/areagourmet-1.png';
import proj2image from '../assets/imgs/areagourmet-2.png';
import proj3image from '../assets/imgs/backgroundnoite-1.png';

//temporario array de projetos
const listaDeProjetos = [
    {
        id: 1,
        title: "Casa Contemporânea",
        description: "Um projeto residencial que prioriza a luz natural e a integração com a natureza.",
        image: proj1image
    },
    {
        id: 2,
        title: "Escritório Moderno",
        description: "Design de interiores para um ambiente de trabalho colaborativo e inspirador.",
        image: proj2image
    },
    {
        id: 3,
        title: "Reforma de Apartamento",
        description: "Otimização de espaços e renovação de acabamentos para um lar mais aconchegante.",
        image: proj3image
    }
];

function Projetos() {
    const [modalShow, setModalShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShowModal = (project) => {
        setSelectedProject(project);
        setModalShow(true);
    };

    const handleHideModal = () => {
        setModalShow(false);
        setSelectedProject(null);
    };

    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1 className="display-4">Meus Projetos</h1>
                        <p className="lead text-muted">Conheça alguns dos trabalhos que desenvolvi, unindo criatividade e técnica.</p>
                    </div>

                    <div className="row">
                        {listaDeProjetos.map(projeto => (
                            <CardsProjetos
                                key={projeto.id}
                                image={projeto.image}
                                title={projeto.title}
                                description={projeto.description}
                                onShowDetails={() => handleShowModal(projeto)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <ModalProjeto
                show={modalShow}
                onHide={handleHideModal}
                project={selectedProject}
            />
        </>
    );
}

export default Projetos