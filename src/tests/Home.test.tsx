import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '../components/Home';

describe('Home Component', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  it('should render the main title', () => {
    renderHome();
    const titleElement = screen.getByText('PHILIPP REYES');
    expect(titleElement).toBeInTheDocument();
  });

  it('should have a typing effect container', () => {
    renderHome();
    
    const typeContainer = screen.getByText(/PHILIPP REYES/i).parentElement?.parentElement;
    expect(typeContainer).toBeInTheDocument();
  });

  it('should render the intro paragraph', () => {
    renderHome();
    const introParagraph = screen.getByText(/¡Bienvenido a mi portafolio!/i);
    expect(introParagraph).toBeInTheDocument();
  });

  it('should have two navigation buttons', () => {
    renderHome();
    
    const projectsButton = screen.getByTestId('projects-button');
    const contactButton = screen.getByTestId('contact-button');
    
    expect(projectsButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
  });

  it('should have proper links on buttons', () => {
    renderHome();
    
    const projectsButton = screen.getByText('VER PROYECTOS');
    const contactButton = screen.getByText('CONTACTO');
    
    expect(projectsButton.closest('a')).toHaveAttribute('href', '/projects');
    expect(contactButton.closest('a')).toHaveAttribute('href', '/contact');
  });
});