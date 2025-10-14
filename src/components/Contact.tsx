import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Limpiar el error cuando el usuario comienza a escribir
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'El asunto es requerido';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de envío (en un caso real, se enviaría a un backend)
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        
        // Resetear el formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Ocultar el mensaje de éxito después de unos segundos
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  return (
    <Container className="contact-container" data-testid="contact-component">
      <Row>
        <Col>
          <div className="section-title">
            <h2>CONTACTO</h2>
            <div className="pixel-divider"></div>
          </div>
        </Col>
      </Row>
      
      <Row className="contact-content">
        <Col lg={6} className="contact-info">
          <div className="arcade-panel">
            <h3 className="panel-title">CONECTEMOS</h3>
            
            <div className="contact-methods">
              <div className="contact-method" data-testid="email-contact">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-details">
                  <h4>EMAIL</h4>
                  <p>philipp.reyes@example.com</p>
                </div>
              </div>
              
              <div className="contact-method" data-testid="location-contact">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-details">
                  <h4>UBICACIÓN</h4>
                  <p>Ciudad, País</p>
                </div>
              </div>
              
              <div className="contact-method" data-testid="linkedin-contact">
                <div className="method-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="method-details">
                  <h4>LINKEDIN</h4>
                  <p>linkedin.com/in/your-linkedin</p>
                </div>
              </div>
            </div>
            
            <div className="response-time">
              <div className="blinking-dot"></div>
              <p>TIEMPO DE RESPUESTA: 24-48 HRS</p>
            </div>
          </div>
        </Col>
        
        <Col lg={6} className="contact-form-container">
          <div className="arcade-form">
            <h3 className="form-title">ENVÍA TU MENSAJE</h3>
            
            {showSuccess && (
              <div className="success-message" data-testid="success-message">
                <div className="pixel-checkmark"></div>
                <p>¡Mensaje enviado con éxito!</p>
              </div>
            )}
            
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="form-label">NOMBRE</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="custom-input"
                  isInvalid={!!formErrors.name}
                  data-testid="input-name"
                />
                <Form.Control.Feedback type="invalid" data-testid="error-name">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="form-label">EMAIL</Form.Label>
                <Form.Control 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="custom-input"
                  isInvalid={!!formErrors.email}
                  data-testid="input-email"
                />
                <Form.Control.Feedback type="invalid" data-testid="error-email">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label className="form-label">ASUNTO</Form.Label>
                <Form.Control 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="custom-input"
                  isInvalid={!!formErrors.subject}
                  data-testid="input-subject"
                />
                <Form.Control.Feedback type="invalid" data-testid="error-subject">
                  {formErrors.subject}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="form-label">MENSAJE</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="custom-input custom-textarea"
                  isInvalid={!!formErrors.message}
                  data-testid="input-message"
                />
                <Form.Control.Feedback type="invalid" data-testid="error-message">
                  {formErrors.message}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Button 
                variant="primary" 
                type="submit" 
                className="btn-arcade btn-send"
                disabled={isSubmitting}
                data-testid="submit-button"
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;