import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import Projects from '../components/Projects';
import { BrowserRouter } from 'react-router-dom';

// Mock de las imágenes para evitar errores de importación
vi.mock('../assets/img/Captura de pantalla 2025-10-18 143139.png', () => ({ default: 'mil-sabores-mock.png' }));
vi.mock('../assets/img/Captura de pantalla 2025-10-18 175341.png', () => ({ default: 'blog-deportivo-mock.png' }));
vi.mock('../assets/img/Captura de pantalla 2025-10-18 183221.png', () => ({ default: 'tienda-esoterica-mock.png' }));

describe('ProjectsComponent', () => {
  // Limpiar después de cada test
  afterEach(() => {
    vi.clearAllMocks();
  });

  // Función helper para renderizar el componente
  const renderProjects = () => {
    return render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
  };

  it('should render without crashing and show the title', () => {
    renderProjects();
    const titleElement = screen.getByText(/PROYECTOS/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should display exactly three projects', () => {
    renderProjects();
    
    const project1 = screen.getByTestId('project-1');
    const project2 = screen.getByTestId('project-2');
    const project3 = screen.getByTestId('project-3');

    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
  });

  it('should display correct technologies for each project', () => {
    renderProjects();
    
    const expectedTechnologies = ['HTML', 'JavaScript', 'CSS'];
    
    expectedTechnologies.forEach(tech => {
      const techElements = screen.getAllByText(tech);
      expect(techElements.length).toBeGreaterThan(0);
    });
  });
});