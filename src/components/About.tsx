import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <Container className="about-container" data-testid="about-component">
      <Row>
        <Col>
          <div className="section-title">
            <h2>SOBRE MÍ</h2>
            <div className="pixel-divider"></div>
          </div>
        </Col>
      </Row>
      
      <Row className="about-content">
        <Col md={5} className="about-image-container">
          <div className="pixel-frame">
            <div className="profile-image-container">
              <div className="profile-image">
                <img src={require('../assets/img/0992261F-C452-49E7-8DD4-9D507F9DBC67.jpeg')} alt="Philipp Reyes" className="img-fluid" data-testid="profile-image" />
              </div>
            </div>
          </div>
          <div className="character-stats">
            <div className="stat-item">
              <span className="stat-label">NIVEL:</span>
              <span className="stat-value">Estudiante de Ingeniería en Informática</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">EXPERIENCIA:</span>
              <span className="stat-value">Cursando cuarto semestre de la carrera</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">CLASE:</span>
              <span className="stat-value">Programador</span>
            </div>
          </div>
        </Col>
        
        <Col md={7} className="about-text">
          <div className="dialog-box">
            <p>
              ¡Hola! Soy Philipp Reyes, un estudiante de Ingeniería en Informática con interés en el desarrollo de software y la creación de soluciones tecnológicas prácticas.
            </p>
            <p>
              Mi lenguaje principal es Python, con el que he desarrollado pequeños proyectos y ejercicios que me han permitido fortalecer mi lógica de programación y resolver problemas de forma estructurada.
            </p>
            <p>
              Además, tengo conocimientos básicos en Java, SQL, Kotlin, CSS y JavaScript, los cuales estoy perfeccionando a través de cursos, prácticas personales y proyectos académicos.
            </p>
            <p>
              Me interesa especialmente el desarrollo backend, la automatización de tareas y la gestión de proyectos, aunque también disfruto explorar el mundo del frontend y mejorar mis habilidades en diseño web.
            </p>
            <p>
              Me motiva seguir aprendiendo nuevas tecnologías y enfrentar desafíos que me permitan crecer como programador. En mi tiempo libre, me gusta aprender por cuenta propia, probar nuevas herramientas, jugar videojuegos y escuchar música.
            </p>
            <div className="dialog-controls">
              <span>A: SIGUIENTE</span>
              <span>B: VOLVER</span>
            </div>
          </div>
        </Col>
      </Row>
      
      <Row className="education-section">
        <Col>
          <h3 className="sub-title">EDUCACIÓN</h3>
          <div className="timeline">
            <div className="timeline-item" data-testid="education-item-1">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h4>INGENIERÍA EN INFORMÁTICA</h4>
                <p className="timeline-date">2024 - ACTUALIDAD</p>
                <p>Instituto Profesional DuocUC</p>
                <p>Ingeniería en Informática con mención en Desarrollo de Software</p>
              </div>
            </div>
            <div className="timeline-item" data-testid="education-item-2">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h4>EGRESADO DE ENSEÑANZA MEDIA</h4>
                <p className="timeline-date">2021</p>
                <p>Colegío Instituto Linares</p>
                <p>Egresado de Enseñanza Media en colegío Instituto Linares</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;