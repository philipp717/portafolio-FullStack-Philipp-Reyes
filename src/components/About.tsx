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
                <img src={require('../assets/img/profile.png')} alt="Philipp Reyes" className="img-fluid" data-testid="profile-image" />
              </div>
            </div>
          </div>
          <div className="character-stats">
            <div className="stat-item">
              <span className="stat-label">NIVEL:</span>
              <span className="stat-value">DESARROLLADOR FULLSTACK</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">EXP:</span>
              <span className="stat-value">+2 AÑOS</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">CLASE:</span>
              <span className="stat-value">PROGRAMADOR</span>
            </div>
          </div>
        </Col>
        
        <Col md={7} className="about-text">
          <div className="dialog-box">
            <p>
              ¡Hola! Soy Philipp Reyes, un desarrollador Full Stack apasionado por crear experiencias digitales interactivas y atractivas.
            </p>
            <p>
              Mi enfoque combina creatividad técnica con un diseño centrado en el usuario. Me especializo en el desarrollo frontend con React y backend con diversas tecnologías.
            </p>
            <p>
              Siempre me mantengo actualizado con las últimas tecnologías y tendencias del desarrollo web. Me encanta resolver problemas complejos y transformar ideas en aplicaciones funcionales y estéticamente agradables.
            </p>
            <p>
              Cuando no estoy programando, disfruto de los videojuegos (como puedes notar por el diseño de este portafolio), la música y explorar nuevas tecnologías.
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
                <p className="timeline-date">2020 - 2024</p>
                <p>Universidad Tecnológica</p>
                <p>Especialización en Desarrollo Web y Aplicaciones Móviles</p>
              </div>
            </div>
            <div className="timeline-item" data-testid="education-item-2">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h4>BOOTCAMP DESARROLLO FULL STACK</h4>
                <p className="timeline-date">2022</p>
                <p>Academia de Desarrollo</p>
                <p>MERN Stack: MongoDB, Express, React, Node.js</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;