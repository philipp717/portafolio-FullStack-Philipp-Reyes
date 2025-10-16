import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" data-testid="footer-component">
      <Container>
        <Row>
          <Col md={6} className="footer-left">
            <p className="footer-text">&copy; {currentYear} Philipp Reyes</p>
          </Col>
          <Col md={6} className="footer-right">
            <div className="social-links">
              <div 
                className="social-link"
                data-testid="github-link"
              >
                <i className="fab fa-github"></i>
              </div>
              <div 
                className="social-link"
                data-testid="linkedin-link"
              >
                <i className="fab fa-linkedin"></i>
              </div>
              <div 
                className="social-link"
                data-testid="email-link"
              >
                <i className="fas fa-envelope"></i>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="credits">
              <span className="insert-coin">INSERT COIN TO CONTINUE</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;