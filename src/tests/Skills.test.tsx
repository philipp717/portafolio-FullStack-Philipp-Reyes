import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
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

  it('should show frontend skills by default', async () => {
    render(<Skills />);
    
    // Wait for skills to be displayed after animation
    await waitFor(() => {
      const htmlSkill = screen.getByText('HTML5');
      const cssSkill = screen.getByText('CSS3');
      const jsSkill = screen.getByText('JavaScript');
      const reactSkill = screen.getByText('React');
      
      expect(htmlSkill).toBeInTheDocument();
      expect(cssSkill).toBeInTheDocument();
      expect(jsSkill).toBeInTheDocument();
      expect(reactSkill).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should change skills when clicking on different category', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    // Click on backend tab
    const backendTab = screen.getByTestId('tab-backend');
    await user.click(backendTab);
    
    // Check for backend skills
    await waitFor(() => {
      const pythonSkill = screen.getByText('Python');
      const javaSkill = screen.getByText('Java');
      const nodeSkill = screen.getByText('Node.js');
      
      expect(pythonSkill).toBeInTheDocument();
      expect(javaSkill).toBeInTheDocument();
      expect(nodeSkill).toBeInTheDocument();
    }, { timeout: 1000 });
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