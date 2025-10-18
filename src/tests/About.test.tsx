import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('profile.png'));
  });

  it('should render personal information', () => {
    render(<About />);
    
    const nameInfo = screen.getByText('Nombre: Philipp Reyes');
    const locationInfo = screen.getByText('Ubicación: Santiago, Chile');
    const educationInfo = screen.getByText('Educación: Ingeniería en Informática');
    
    expect(nameInfo).toBeInTheDocument();
    expect(locationInfo).toBeInTheDocument();
    expect(educationInfo).toBeInTheDocument();
  });

  it('should render about text with highlight', () => {
    render(<About />);
    
    // Check for paragraph text
    const aboutText = screen.getByTestId('about-text');
    expect(aboutText).toBeInTheDocument();
    expect(aboutText.textContent).toContain('Desarrollador Full Stack');
  });

  it('should render all section tabs', () => {
    render(<About />);
    
    const experienceTab = screen.getByText('EXPERIENCIA');
    const educationTab = screen.getByText('EDUCACIÓN');
    const hobbiesTab = screen.getByText('HOBBIES');
    
    expect(experienceTab).toBeInTheDocument();
    expect(educationTab).toBeInTheDocument();
    expect(hobbiesTab).toBeInTheDocument();
  });

  it('should show experience info by default', () => {
    render(<About />);
    
    const jobTitle = screen.getByText('Desarrollador Full Stack');
    const companyName = screen.getByText('Empresa Tecnológica, 2020 - Presente');
    
    expect(jobTitle).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
  });

  it('should change content when clicking on different tab', async () => {
    render(<About />);
    
    // Experience tab content should be visible by default
    const jobElement = screen.getByText('Desarrollador Full Stack');
    expect(jobElement).toBeInTheDocument();
    
    // Click on education tab
    const educationTab = screen.getByTestId('tab-education');
    userEvent.click(educationTab);
    
    // Education content should be visible now
    const degreeElement = await screen.findByText('Ingeniería en Informática');
    const universityElement = await screen.findByText('Universidad Tecnológica, 2015 - 2019');
    
    expect(degreeElement).toBeInTheDocument();
    expect(universityElement).toBeInTheDocument();
    expect(screen.queryByText('Desarrollador Full Stack')).not.toBeInTheDocument();
  });

  it('should render download CV button', () => {
    render(<About />);
    
    const downloadButton = screen.getByText('DESCARGAR CV');
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute('href', expect.stringContaining('philipp-reyes-cv.pdf'));
  });

  it('should show arcade-style pixel design elements', () => {
    render(<About />);
    
    const arcadeElements = screen.getAllByTestId('arcade-element');
    expect(arcadeElements.length).toBeGreaterThan(0);
  });
});