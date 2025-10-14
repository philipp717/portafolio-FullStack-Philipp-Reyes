import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from '../components/Skills';

describe('Skills Component', () => {
  it('should render the section title', () => {
    render(<Skills />);
    const titleElement = screen.getByText('HABILIDADES');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render all category tabs', () => {
    render(<Skills />);
    
    const frontendTab = screen.getByText('FRONTEND');
    const backendTab = screen.getByText('BACKEND');
    const toolsTab = screen.getByText('HERRAMIENTAS');
    
    expect(frontendTab).toBeInTheDocument();
    expect(backendTab).toBeInTheDocument();
    expect(toolsTab).toBeInTheDocument();
  });

  it('should show frontend skills by default', () => {
    render(<Skills />);
    
    // Check for frontend skills
    const htmlSkill = screen.getByText('HTML5');
    const cssSkill = screen.getByText('CSS3');
    const jsSkill = screen.getByText('JavaScript');
    
    expect(htmlSkill).toBeInTheDocument();
    expect(cssSkill).toBeInTheDocument();
    expect(jsSkill).toBeInTheDocument();
  });

  it('should change skills when clicking on different category', async () => {
    render(<Skills />);
    
    // Check frontend skills first
    const reactSkill = screen.getByText('React');
    expect(reactSkill).toBeInTheDocument();
    
    // Click on backend tab
    const backendTab = screen.getByTestId('tab-backend');
    userEvent.click(backendTab);
    
    // Check for backend skills
    const nodeSkill = await screen.findByText('Node.js');
    const expressSkill = await screen.findByText('Express');
    const mongoSkill = await screen.findByText('MongoDB');
    
    expect(nodeSkill).toBeInTheDocument();
    expect(expressSkill).toBeInTheDocument();
    expect(mongoSkill).toBeInTheDocument();
  });

  it('should display skill levels with progress bars', () => {
    render(<Skills />);
    
    // Since the skills data is hardcoded in the component
    // we can check for some of those values
    const html5PercentageText = screen.getByText('90%');
    const css3PercentageText = screen.getByText('85%');
    
    expect(html5PercentageText).toBeInTheDocument();
    expect(css3PercentageText).toBeInTheDocument();
  });

  it('should render the skills legend', () => {
    render(<Skills />);
    
    const legendTitle = screen.getByText('NIVELES DE PODER');
    const beginnerLevel = screen.getByText('PRINCIPIANTE (0-25%)');
    const intermediateLevel = screen.getByText('INTERMEDIO (26-50%)');
    const advancedLevel = screen.getByText('AVANZADO (51-75%)');
    const expertLevel = screen.getByText('EXPERTO (76-100%)');
    
    expect(legendTitle).toBeInTheDocument();
    expect(beginnerLevel).toBeInTheDocument();
    expect(intermediateLevel).toBeInTheDocument();
    expect(advancedLevel).toBeInTheDocument();
    expect(expertLevel).toBeInTheDocument();
  });
});