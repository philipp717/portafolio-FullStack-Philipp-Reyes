import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../components/Projects';
import userEvent from '@testing-library/user-event';

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
    
    const pasteleriaProject = screen.getByText('PASTELERÍA MIL SABORES');
    const blogDeportivoProject = screen.getByText('BLOG DEPORTIVO');
    const tiendaEsotericaProject = screen.getByText('TIENDA ESOTÉRICA');
    
    expect(pasteleriaProject).toBeInTheDocument();
    expect(blogDeportivoProject).toBeInTheDocument();
    expect(tiendaEsotericaProject).toBeInTheDocument();
  });

  it('should show project details when a project is clicked', async () => {
    renderProjects();
    
    // Find the first project card and click it
    const projectCard = screen.getByTestId('project-1');
    userEvent.click(projectCard);
    
    // Check if the modal is displayed
    const modalContent = await screen.findByText(/tienda virtual con carrito de compras/i);
    expect(modalContent).toBeInTheDocument();
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

  it('should close project details when close button is clicked', async () => {
    renderProjects();
    
    // Open a project's details
    const projectCard = screen.getByTestId('project-1');
    userEvent.click(projectCard);
    
    // Find the close button and click it
    const closeButton = await screen.findByTestId('close-details-button');
    userEvent.click(closeButton);
    
    // Use waitForElementToBeRemoved to properly handle the animation timing
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/tienda virtual con carrito de compras/i)
    );
  });

  it('should contain a link to code in project details', async () => {
    renderProjects();
    
    // Open a project's details
    const projectCard = screen.getByTestId('project-1');
    userEvent.click(projectCard);
    
    // Check for code link
    const codeLink = await screen.findByTestId('code-link');
    
    expect(codeLink).toBeInTheDocument();
    expect(codeLink).toHaveAttribute('href', expect.stringContaining('github.com'));
  });
});