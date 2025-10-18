import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from './Projects';

const renderWithRouter = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Projects Component', () => {
  beforeEach(() => {
    renderWithRouter(<Projects />);
  });

  test('renders Projects component', () => {
    const projectsElement = screen.getByTestId('projects-component');
    expect(projectsElement).toBeInTheDocument();
  });

  test('displays correct number of projects', () => {
    const projectCards = screen.getAllByTestId(/^project-/);
    expect(projectCards).toHaveLength(3);
  });

  test('displays correct project titles', () => {
    expect(screen.getByText('PASTELERÍA MIL SABORES')).toBeInTheDocument();
    expect(screen.getByText('BLOG DEPORTIVO')).toBeInTheDocument();
    expect(screen.getByText('TIENDA ESOTÉRICA')).toBeInTheDocument();
  });

  test('shows project details when clicking a project', () => {
    const firstProject = screen.getByTestId('project-1');
    fireEvent.click(firstProject);

    const modalElement = screen.getByRole('dialog');
    expect(modalElement).toHaveClass('visible');
  });

  test('closes project details when clicking close button', async () => {
    const firstProject = screen.getByTestId('project-1');
    fireEvent.click(firstProject);

    const closeButton = screen.getByTestId('close-details-button');
    fireEvent.click(closeButton);

    // Esperar a que termine la animación
    await new Promise(resolve => setTimeout(resolve, 300));
    const modalElement = screen.getByRole('dialog');
    expect(modalElement).not.toHaveClass('visible');
  });

  test('displays correct technologies', () => {
    const techTags = screen.getAllByText(/HTML|JavaScript|CSS/);
    expect(techTags.length).toBeGreaterThan(0);
  });

  test('has valid GitHub links', () => {
    const firstProject = screen.getByTestId('project-1');
    fireEvent.click(firstProject);

    const codeLink = screen.getByTestId('code-link');
    expect(codeLink).toHaveAttribute('href', expect.stringContaining('github.com'));
  });
});