import React from 'react';
import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../components/Projects';
import { BrowserRouter } from 'react-router-dom';

// Mock de las imágenes para evitar errores de importación
jest.mock('../assets/img/Captura de pantalla 2025-10-18 143139.png', () => 'mil-sabores-mock.png');
jest.mock('../assets/img/Captura de pantalla 2025-10-18 175341.png', () => 'blog-deportivo-mock.png');
jest.mock('../assets/img/Captura de pantalla 2025-10-18 183221.png', () => 'tienda-esoterica-mock.png');

describe('ProjectsComponent', () => {
  // Limpiar después de cada test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
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

  it('should display exactly three projects with correct titles', () => {
    renderProjects();
    
    // Verificar que existen exactamente 3 tarjetas de proyecto
    const projectCards = screen.getAllByTestId(/^project-\d$/);
    expect(projectCards).toHaveLength(3);

    // Verificar los títulos específicos
    const expectedTitles = [
      'PASTELERÍA MIL SABORES',
      'BLOG DEPORTIVO',
      'TIENDA ESOTÉRICA'
    ];

    expectedTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('should handle project card click and show details modal', async () => {
    renderProjects();
    
    // Encontrar y hacer clic en el primer proyecto
    const firstProject = screen.getByTestId('project-1');
    fireEvent.click(firstProject);

    // Verificar que el modal se muestra
    await waitFor(() => {
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass('visible');
    });
  });

  it('should close modal when clicking close button', async () => {
    renderProjects();
    
    // Abrir el modal
    const firstProject = screen.getByTestId('project-1');
    fireEvent.click(firstProject);

    // Encontrar y hacer clic en el botón de cerrar
    const closeButton = screen.getByTestId('close-details-button');
    fireEvent.click(closeButton);

    // Verificar que el modal se cierra
    await waitFor(() => {
      const modal = screen.getByRole('dialog');
      expect(modal).not.toHaveClass('visible');
    }, {
      timeout: 1000 // Tiempo suficiente para la animación
    });
  });

  it('should display correct technologies for each project', () => {
    renderProjects();
    
    const expectedTechnologies = ['HTML', 'JavaScript', 'CSS'];
    
    expectedTechnologies.forEach(tech => {
      const techElements = screen.getAllByText(tech);
      expect(techElements.length).toBeGreaterThan(0);
    });
  });

  it('should have valid and secure GitHub links', async () => {
    renderProjects();
    
    // Abrir el modal del primer proyecto
    const firstProject = screen.getByTestId('project-1');
    fireEvent.click(firstProject);

    // Verificar el enlace de GitHub
    await waitFor(() => {
      const codeLink = screen.getByTestId('code-link');
      expect(codeLink).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com/));
      expect(codeLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(codeLink).toHaveAttribute('target', '_blank');
    });
  });

  it('should handle missing or failed image loads gracefully', () => {
    renderProjects();
    
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      // Simular error de carga de imagen
      fireEvent.error(img);
      // Verificar que la imagen sigue teniendo un alt text apropiado
      expect(img).toHaveAttribute('alt');
    });
  });

  it('should prevent XSS in project descriptions', () => {
    renderProjects();
    
    // Verificar que las descripciones se renderizan como texto plano
    const descriptions = screen.getAllByTestId(/^project-\d$/);
    descriptions.forEach(description => {
      expect(description).not.toContain('<script>');
      expect(description).not.toContain('javascript:');
    });
  });

  it('should maintain accessibility standards', () => {
    renderProjects();
    
    // Verificar que los elementos interactivos son accesibles
    const interactiveElements = screen.getAllByRole('button');
    interactiveElements.forEach(element => {
      expect(element).toHaveAttribute('aria-label');
    });

    // Verificar que las imágenes tienen textos alternativos
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });
});