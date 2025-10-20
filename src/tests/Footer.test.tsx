import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('should render the footer component', () => {
    render(<Footer />);
    const footer = screen.getByTestId('footer-component');
    expect(footer).toBeInTheDocument();
  });

  it('should render the copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`© ${currentYear} Philipp Reyes`, 'i'));
    expect(copyrightText).toBeInTheDocument();
  });

  it('should render social media icons', () => {
    render(<Footer />);
    
    const githubLink = screen.getByTestId('github-link');
    const linkedinLink = screen.getByTestId('linkedin-link');
    const emailLink = screen.getByTestId('email-link');
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  it('should render arcade-style text', () => {
    render(<Footer />);
    
    const arcadeText = screen.getByText('INSERT COIN TO CONTINUE');
    expect(arcadeText).toBeInTheDocument();
  });
});