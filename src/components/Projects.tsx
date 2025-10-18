import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Projects.css';
import milSaboresImg from '../assets/img/Captura de pantalla 2025-10-18 143139.png';
import taskManagerImg from '../assets/img/Captura de pantalla 2025-10-18 175341.png';
import tiendaEsotericaImg from '../assets/img/Captura de pantalla 2025-10-18 183221.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeUrl: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  
  // Datos de ejemplo para proyectos
  const projects: Project[] = [
    {
      id: 1,
      title: 'PASTELERÍA MIL SABORES',
      description: 'Tienda virtual con carrito de compras, gestión de usuarios y pasarela de pagos. Implementa inicio de sesión y registro, filtrado de productos y diseño responsivo.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      image: milSaboresImg,
      codeUrl: 'https://github.com/philipp717/Prueba1'
    },
    {
      id: 2,
      title: 'BLOG DEPORTIVO',
      description: 'Plataforma de blog dedicada a rutinas de deporte con sistema de agregar a favoritos y búsqueda avanzada.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      image: taskManagerImg,
      codeUrl: 'https://github.com/philipp717/BLOCK-PERSONAL-RUTINADEPORTE'
    },
    {
      id: 3,
      title: 'TIENDA ESOTÉRICA',
      description: 'Tienda en línea especializada en productos esotéricos, con catálogo de productos, carrito de compras y sistema de pago seguro.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      image: tiendaEsotericaImg,
      codeUrl: 'https://github.com/philipp717/tienda_esoterica'
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsVisible(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsVisible(false);
    setTimeout(() => setSelectedProject(null), 300); // Esperar a que termine la animación
  };

  return (
    <Container className="projects-container" data-testid="projects-component">
      <Row>
        <Col>
          <div className="section-title">
            <h2>PROYECTOS</h2>
            <div className="pixel-divider"></div>
            <p className="section-subtitle">SELECCIONA UN PROYECTO PARA MÁS DETALLES</p>
          </div>
        </Col>
      </Row>
      
      <Row className="projects-grid">
        {projects.map(project => (
          <Col key={project.id} xs={12} md={6} lg={6} className="project-col">
            <Card 
              className="project-card" 
              onClick={() => handleProjectClick(project)}
              data-testid={`project-${project.id}`}
            >
              <div className="project-image">
                <div className="image-container">
                  <img 
                    src={project.image} 
                    alt={`Captura de pantalla del proyecto ${project.title}`} 
                    className="project-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/assets/img/fallback-project.png';
                    }}
                  />
                  <div className="project-title">{project.title}</div>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <div className="tech-tags">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </Card.Body>
              <div className="arcade-button">
                <span>SELECT</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* Detalles del proyecto seleccionado */}
      <div className={`project-details-modal ${isDetailsVisible ? 'visible' : ''}`} role="dialog">
        {selectedProject && (
          <div className="modal-content">
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button 
                className="close-button" 
                onClick={handleCloseDetails}
                data-testid="close-details-button"
                aria-label="Cerrar detalles del proyecto"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="project-detail-image">
                <img src={selectedProject.image} alt={selectedProject.title} className="detail-img" />
              </div>
              <p className="project-description">{selectedProject.description}</p>
              <div className="tech-stack">
                <h4>TECNOLOGÍAS:</h4>
                <div className="tech-tags-detailed">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a 
                  href={selectedProject.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-arcade"
                  data-testid="code-link"
                  aria-label={`Ver código del proyecto ${selectedProject.title} en GitHub`}
                  onClick={(e) => {
                    // Validar que el enlace sea seguro
                    if (!selectedProject.codeUrl.startsWith('https://github.com')) {
                      e.preventDefault();
                      console.error('Enlace no seguro detectado');
                    }
                  }}
                >
                  CÓDIGO
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Projects;