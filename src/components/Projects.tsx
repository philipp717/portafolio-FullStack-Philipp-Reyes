import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Projects.css';
import milSaboresImg from '../assets/img/Captura de pantalla 2025-10-18 143139.png';

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
      title: 'TASK MANAGER',
      description: 'Aplicación de gestión de tareas con funcionalidades como arrastrar y soltar, categorización por colores, establecer prioridades y recordatorios.',
      technologies: ['React', 'Redux', 'Firebase', 'SCSS'],
      image: '/assets/projects/taskmanager.jpg',
      codeUrl: 'https://github.com/your-github/taskmanager'
    },
    {
      id: 3,
      title: 'WEATHER APP',
      description: 'Aplicación del clima que muestra pronósticos en tiempo real utilizando geolocalización y APIs externas. Incluye gráficos interactivos y múltiples vistas.',
      technologies: ['React', 'API REST', 'Chart.js', 'CSS3'],
      image: '/assets/projects/weather.jpg',
      codeUrl: 'https://github.com/your-github/weatherapp'
    },
    {
      id: 4,
      title: 'BLOG PERSONAL',
      description: 'Plataforma de blog con sistema de gestión de contenidos, comentarios, categorías y búsqueda avanzada.',
      technologies: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
      image: '/assets/projects/blog.jpg',
      codeUrl: 'https://github.com/your-github/blog'
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
                  <img src={project.image} alt={project.title} className="project-img" />
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
      <div className={`project-details-modal ${isDetailsVisible ? 'visible' : ''}`}>
        {selectedProject && (
          <div className="modal-content">
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button 
                className="close-button" 
                onClick={handleCloseDetails}
                data-testid="close-details-button"
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