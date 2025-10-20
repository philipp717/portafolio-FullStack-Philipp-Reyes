import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, beforeEach, test } from 'vitest';
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
    const titles = screen.getAllByText('PASTELERÍA MIL SABORES');
    expect(titles.length).toBeGreaterThan(0);
  });

  test('displays correct technologies', () => {
    const techTags = screen.getAllByText(/HTML|JavaScript|CSS/);
    expect(techTags.length).toBeGreaterThan(0);
  });
});