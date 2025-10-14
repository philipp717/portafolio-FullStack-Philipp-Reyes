import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

  it('should type the full text with animation effect', async () => {
    jest.useFakeTimers();
    renderHome();
    
    // Initially, typed text may be empty or partial
    
    // Wait for the text to be fully typed
    jest.advanceTimersByTime(3000);
    
    const typedElement = screen.getByText('DESARROLLADOR FULLSTACK');
    expect(typedElement).toBeInTheDocument();
    
    jest.useRealTimers();
  });

  it('should render the intro paragraph', () => {
    renderHome();
    const introParagraph = screen.getByText(/¡Bienvenido a mi portafolio estilo arcade!/i);
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

  it('should render the arcade controls with instructions', () => {
    renderHome();
    
    const instructions = screen.getByText('USE LAS TECLAS DE NAVEGACIÓN O EL MENÚ PARA EXPLORAR');
    const upKey = screen.getByText('▲');
    const downKey = screen.getByText('▼');
    const leftKey = screen.getByText('◄');
    const rightKey = screen.getByText('►');
    
    expect(instructions).toBeInTheDocument();
    expect(upKey).toBeInTheDocument();
    expect(downKey).toBeInTheDocument();
    expect(leftKey).toBeInTheDocument();
    expect(rightKey).toBeInTheDocument();
  });
});