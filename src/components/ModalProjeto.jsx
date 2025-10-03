import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProjectModal({ show, onHide, project }) {
  if (!project) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={project.image} alt={project.title} className="img-fluid mb-4" />
        {/* Você pode adicionar uma descrição mais longa aqui */}
        <p>{project.longDescription || project.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;