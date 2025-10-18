import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  it('should render the contact section title', () => {
    render(<Contact />);
    const titleElement = screen.getByText('CONTÁCTAME');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the contact form with all required fields', () => {
    render(<Contact />);
    
    // Check form elements
    const nameInput = screen.getByPlaceholderText('TU NOMBRE');
    const emailInput = screen.getByPlaceholderText('TU EMAIL');
    const subjectInput = screen.getByPlaceholderText('ASUNTO');
    const messageInput = screen.getByPlaceholderText('MENSAJE');
    const submitButton = screen.getByText('ENVIAR');
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should show validation errors when submitting empty form', async () => {
    render(<Contact />);
    
    // Get submit button and click it
    const submitButton = screen.getByText('ENVIAR');
    userEvent.click(submitButton);
    
    // Check for error messages
    const nameError = await screen.findByText('Nombre es requerido');
    const emailError = await screen.findByText('Email es requerido');
    const messageError = await screen.findByText('Mensaje es requerido');
    
    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(messageError).toBeInTheDocument();
  });

  it('should validate email format', async () => {
    render(<Contact />);
    
    // Fill in invalid email
    const emailInput = screen.getByPlaceholderText('TU EMAIL');
    userEvent.type(emailInput, 'invalid-email');
    
    // Get submit button and click it
    const submitButton = screen.getByText('ENVIAR');
    userEvent.click(submitButton);
    
    // Check for email format error
    const emailError = await screen.findByText('Email no es válido');
    expect(emailError).toBeInTheDocument();
  });

  it('should clear form and show success message after successful submission', async () => {
    render(<Contact />);
    
    // Fill in all fields correctly
    const nameInput = screen.getByPlaceholderText('TU NOMBRE');
    const emailInput = screen.getByPlaceholderText('TU EMAIL');
    const subjectInput = screen.getByPlaceholderText('ASUNTO');
    const messageInput = screen.getByPlaceholderText('MENSAJE');
    
    userEvent.type(nameInput, 'Test User');
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(subjectInput, 'Test Subject');
    userEvent.type(messageInput, 'Test Message Content');
    
    // Submit the form
    const submitButton = screen.getByText('ENVIAR');
    userEvent.click(submitButton);
    
    // Check for success message
    const successMessage = await screen.findByText('¡Mensaje enviado con éxito!');
    expect(successMessage).toBeInTheDocument();
    
    // Check form was cleared
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(subjectInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
  
  it('should render contact information section', () => {
    render(<Contact />);
    
    const emailInfo = screen.getByText('philippreyes@gmail.com');
    const phoneInfo = screen.getByText('+56 9 1234 5678');
    const locationInfo = screen.getByText('Santiago, Chile');
    
    expect(emailInfo).toBeInTheDocument();
    expect(phoneInfo).toBeInTheDocument();
    expect(locationInfo).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(<Contact />);
    
    const githubLink = screen.getByTestId('github-link');
    const linkedinLink = screen.getByTestId('linkedin-link');
    const twitterLink = screen.getByTestId('twitter-link');
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });
});