import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'ESTUDIANTE DE INGENIERÍA EN INFORMÁTICA';
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Efecto para simular escritura
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100); // Velocidad de escritura
      
      return () => clearTimeout(timeout);
    }
    return undefined; // Retorno explícito para todas las rutas
  }, [index, fullText]);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Velocidad de parpadeo
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Container className="home-container" data-testid="home-component">
      <Row className="align-items-center justify-content-center text-center">
        <Col md={10} lg={8}>
          <div className="welcome-box">
            <h1 className="arcade-title">PHILIPP REYES</h1>
            <div className="type-container">
              <h2 className="typed-text">
                {typedText}
                <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
              </h2>
            </div>
            <p className="intro-text">
              ¡Bienvenido a mi portafolio! Explora mis habilidades y capacidades como si estuvieras en un viaje a través de un videojuego retro.
            </p>
            <div className="button-container">
              <Button 
                as="a" 
                href="/projects" 
                className="btn-arcade" 
                data-testid="projects-button"
              >
                VER PROYECTOS
              </Button>
              <Button 
                as="a" 
                href="/contact" 
                className="btn-arcade" 
                data-testid="contact-button"
              >
                CONTACTO
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;