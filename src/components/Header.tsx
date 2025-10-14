import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

interface NavItem {
  title: string;
  path: string;
}

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { title: 'INICIO', path: '/' },
    { title: 'SOBRE MÍ', path: '/about' },
    { title: 'PROYECTOS', path: '/projects' },
    { title: 'HABILIDADES', path: '/skills' },
    { title: 'CONTACTO', path: '/contact' }
  ];

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <header className="header">
      <Container fluid>
        <Navbar expanded={expanded} expand="lg" variant="dark" className="arcade-navbar">
          <Navbar.Brand as={Link} to="/" className="logo-text">
            P.REYES
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={() => setExpanded(!expanded)} 
            className="custom-toggler"
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  data-testid={`nav-link-${index}`}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;