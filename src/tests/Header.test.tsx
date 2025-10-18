import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it('should render the logo text', () => {
    renderHeader();
    const logoElement = screen.getByText('P.REYES');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render all navigation links', () => {
    renderHeader();
    
    const homeLink = screen.getByText('INICIO');
    const aboutLink = screen.getByText('SOBRE MÍ');
    const projectsLink = screen.getByText('PROYECTOS');
    const skillsLink = screen.getByText('HABILIDADES');
    const contactLink = screen.getByText('CONTACTO');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('should have the correct href attributes for links', () => {
    renderHeader();
    
    const homeLink = screen.getByText('INICIO').closest('a');
    const aboutLink = screen.getByText('SOBRE MÍ').closest('a');
    const projectsLink = screen.getByText('PROYECTOS').closest('a');
    const skillsLink = screen.getByText('HABILIDADES').closest('a');
    const contactLink = screen.getByText('CONTACTO').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(skillsLink).toHaveAttribute('href', '/skills');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('should have the correct test ids for navigation links', () => {
    renderHeader();
    
    const navLinks = screen.getAllByTestId(/nav-link-\d/);
    expect(navLinks.length).toBe(5);
  });
});