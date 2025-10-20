import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Projects from '../components/Projects';

describe('Projects Component', () => {
  const renderProjects = () => {
    return render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
  };

  it('should render the section title', () => {
    renderProjects();
    const titleElement = screen.getByText('PROYECTOS');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render all project cards', () => {
    renderProjects();
    
    const pasteleriaProject = screen.getAllByText('PASTELERÍA MIL SABORES')[0];
    const blogDeportivoProject = screen.getAllByText('BLOG DEPORTIVO')[0];
    const tiendaEsotericaProject = screen.getAllByText('TIENDA ESOTÉRICA')[0];
    
    expect(pasteleriaProject).toBeInTheDocument();
    expect(blogDeportivoProject).toBeInTheDocument();
    expect(tiendaEsotericaProject).toBeInTheDocument();
  });

  it('should display technologies used in each project', () => {
    renderProjects();
    
    // Check if technology tags are displayed
    const htmlTag = screen.getAllByText('HTML')[0];
    const jsTag = screen.getAllByText('JavaScript')[0];
    const cssTag = screen.getAllByText('CSS')[0];
    
    expect(htmlTag).toBeInTheDocument();
    expect(jsTag).toBeInTheDocument();
    expect(cssTag).toBeInTheDocument();
  });

  it('should render project test ids', () => {
    renderProjects();
    
    const project1 = screen.getByTestId('project-1');
    const project2 = screen.getByTestId('project-2');
    const project3 = screen.getByTestId('project-3');
    
    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
  });
});