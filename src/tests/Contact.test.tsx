import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  it('should render the contact section title', () => {
    render(<Contact />);
    const titleElement = screen.getByText('CONTACTO');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the contact component', () => {
    render(<Contact />);
    const contactComponent = screen.getByTestId('contact-component');
    expect(contactComponent).toBeInTheDocument();
  });
});