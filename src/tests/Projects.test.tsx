import React from 'react';
import { render, screen } from '@testing-library/react';
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
    
    const ecommerceProject = screen.getByText('E-COMMERCE APP');
    const taskManagerProject = screen.getByText('TASK MANAGER');
    const weatherProject = screen.getByText('WEATHER APP');
    const blogProject = screen.getByText('BLOG PERSONAL');
    
    expect(ecommerceProject).toBeInTheDocument();
    expect(taskManagerProject).toBeInTheDocument();
    expect(weatherProject).toBeInTheDocument();
    expect(blogProject).toBeInTheDocument();
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
    const reactTag = screen.getAllByText('React')[0];
    const nodeTag = screen.getByText('Node.js');
    const bootstrapTag = screen.getByText('Bootstrap');
    
    expect(reactTag).toBeInTheDocument();
    expect(nodeTag).toBeInTheDocument();
    expect(bootstrapTag).toBeInTheDocument();
  });

  it('should close project details when close button is clicked', async () => {
    renderProjects();
    
    // Open a project's details
    const projectCard = screen.getByTestId('project-1');
    userEvent.click(projectCard);
    
    // Find the close button and click it
    const closeButton = await screen.findByTestId('close-details-button');
    userEvent.click(closeButton);
    
    // Check if the modal is not visible (should be closed)
    // This needs a bit of time for the animation to complete
    setTimeout(() => {
      const modalContent = screen.queryByText(/tienda virtual con carrito de compras/i);
      expect(modalContent).not.toBeInTheDocument();
    }, 500);
  });

  it('should contain links to demo and code in project details', async () => {
    renderProjects();
    
    // Open a project's details
    const projectCard = screen.getByTestId('project-1');
    userEvent.click(projectCard);
    
    // Check for demo and code links
    const demoLink = await screen.findByTestId('demo-link');
    const codeLink = await screen.findByTestId('code-link');
    
    expect(demoLink).toBeInTheDocument();
    expect(codeLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute('href', expect.stringContaining('example.com/demo'));
    expect(codeLink).toHaveAttribute('href', expect.stringContaining('github.com'));
  });
});