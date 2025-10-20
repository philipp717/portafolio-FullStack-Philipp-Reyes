import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../components/About';

describe('About Component', () => {
  it('should render the about section title', () => {
    render(<About />);
    const titleElement = screen.getByText('SOBRE MÍ');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render profile image with proper alt text', () => {
    render(<About />);
    const profileImage = screen.getByAltText('Philipp Reyes');
    expect(profileImage).toBeInTheDocument();
  });

  it('should render the about component', () => {
    render(<About />);
    const aboutComponent = screen.getByTestId('about-component');
    expect(aboutComponent).toBeInTheDocument();
  });

  it('should render education section', () => {
    render(<About />);
    
    const educationTitle = screen.getByText('EDUCACIÓN');
    expect(educationTitle).toBeInTheDocument();
  });

  it('should render education items', () => {
    render(<About />);
    
    const educationItem1 = screen.getByTestId('education-item-1');
    const educationItem2 = screen.getByTestId('education-item-2');
    
    expect(educationItem1).toBeInTheDocument();
    expect(educationItem2).toBeInTheDocument();
  });
});