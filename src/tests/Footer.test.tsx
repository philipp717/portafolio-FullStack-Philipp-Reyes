import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('should render the copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2023 Philipp Reyes. Todos los derechos reservados./i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(<Footer />);
    
    const githubLink = screen.getByTestId('footer-github');
    const linkedinLink = screen.getByTestId('footer-linkedin');
    const twitterLink = screen.getByTestId('footer-twitter');
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/philippreyes');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/philippreyes');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/philippreyes');
  });

  it('should render back to top button', () => {
    render(<Footer />);
    
    const backToTopButton = screen.getByTestId('back-to-top');
    expect(backToTopButton).toBeInTheDocument();
  });

  it('should scroll to top when back to top button is clicked', () => {
    // Mock the scrollTo function
    global.scrollTo = jest.fn();
    
    render(<Footer />);
    
    const backToTopButton = screen.getByTestId('back-to-top');
    userEvent.click(backToTopButton);
    
    // Check if the scrollTo function was called with the correct parameters
    expect(global.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });

  it('should render the navigation links in footer', () => {
    render(<Footer />);
    
    const homeLink = screen.getByText('INICIO');
    const aboutLink = screen.getByText('SOBRE MÍ');
    const projectsLink = screen.getByText('PROYECTOS');
    const skillsLink = screen.getByText('HABILIDADES');
    const contactLink = screen.getByText('CONTACTO');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('should have arcade-style design elements', () => {
    render(<Footer />);
    
    const arcadeElements = screen.getAllByTestId('arcade-footer-element');
    expect(arcadeElements.length).toBeGreaterThan(0);
  });

  it('should render tech stack information', () => {
    render(<Footer />);
    
    const techStackText = screen.getByText('Desarrollado con:');
    const reactText = screen.getByText('React');
    const bootstrapText = screen.getByText('Bootstrap');
    
    expect(techStackText).toBeInTheDocument();
    expect(reactText).toBeInTheDocument();
    expect(bootstrapText).toBeInTheDocument();
  });
});