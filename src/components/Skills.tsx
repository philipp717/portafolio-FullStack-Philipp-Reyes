import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css';

interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  // Habilidades actuales
  const skills: Skill[] = [
    // Frontend
    { id: 1, name: 'HTML5', icon: 'html5', level: 56, category: 'frontend' },
    { id: 2, name: 'CSS3', icon: 'css3-alt', level: 40, category: 'frontend' },
    { id: 3, name: 'JavaScript', icon: 'js', level: 54, category: 'frontend' },
    { id: 4, name: 'React', icon: 'react', level: 43, category: 'frontend' },
    
    // Backend
    { id: 7, name: 'Python', icon: 'python', level: 78, category: 'backend' },
    { id: 8, name: 'Java', icon: 'java', level: 65, category: 'backend' },
    { id: 9, name: 'Node.js', icon: 'node-js', level: 45, category: 'backend' },
    { id: 10, name: 'Spring Boot', icon: 'leaf', level: 36, category: 'backend' },
    { id: 11, name: 'MySQL', icon: 'database', level: 68, category: 'backend' },
    { id: 12, name: 'Hibernate', icon: 'database', level: 32, category: 'backend' },
    { id: 13, name: 'Docker', icon: 'docker', level: 31, category: 'backend' },
    
    // Herramientas
    { id: 14, name: 'VS Code', icon: 'code', level: 86, category: 'tools' },
    { id: 15, name: 'Git', icon: 'git-alt', level: 64, category: 'tools' },
    { id: 16, name: 'GitHub', icon: 'github', level: 72, category: 'tools' },
    { id: 17, name: 'Apache NetBeans', icon: 'java', level: 52, category: 'tools' },
    { id: 18, name: 'SQL Developer', icon: 'database', level: 64, category: 'tools' }
  ];

  // Animación gradual de las barras de progreso
  useEffect(() => {
    const filteredSkills = skills.filter(skill => skill.category === activeCategory);
    setAnimatedSkills([]);
    
    // Mostrar gradualmente las habilidades
    const timer = setTimeout(() => {
      setAnimatedSkills(filteredSkills);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const categories = [
    { id: 'frontend', name: 'FRONTEND' },
    { id: 'backend', name: 'BACKEND' },
    { id: 'tools', name: 'HERRAMIENTAS' }
  ];

  return (
    <Container className="skills-container" data-testid="skills-component">
      <Row>
        <Col>
          <div className="section-title">
            <h2>HABILIDADES</h2>
            <div className="pixel-divider"></div>
          </div>
        </Col>
      </Row>
      
      <Row className="category-selector">
        <Col>
          <div className="arcade-tabs">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`tab-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                data-testid={`tab-${category.id}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Col>
      </Row>
      
      <Row className="skills-display">
        <Col>
          <div className="arcade-monitor">
            <div className="monitor-header">
              <div className="monitor-title">NIVEL DE HABILIDAD</div>
              <div className="monitor-controls">
                <div className="control-dot"></div>
                <div className="control-dot"></div>
                <div className="control-dot"></div>
              </div>
            </div>
            
            <div className="monitor-content">
              {animatedSkills.map(skill => (
                <div 
                  key={skill.id} 
                  className="skill-item"
                  data-testid={`skill-${skill.id}`}
                >
                  <div className="skill-info">
                    <span className="skill-icon">
                      <i className={`fab fa-${skill.icon}`}></i>
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ width: `${skill.level}%` }}
                      data-level={getLevelName(skill.level)}
                    ></div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      
      <Row className="skills-legend">
        <Col xs={12}>
          <div className="legend-container">
            <h3>NIVELES DE PODER</h3>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#FF0000' }}></div>
                <span>PRINCIPIANTE (0-25%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#FF6600' }}></div>
                <span>INTERMEDIO (26-50%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#FFD700' }}></div>
                <span>AVANZADO (51-75%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#00FF00' }}></div>
                <span>EXPERTO (76-100%)</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Función para determinar el nivel según el porcentaje
const getLevelName = (level: number): string => {
  if (level < 25) return 'principiante';
  if (level < 50) return 'intermedio';
  if (level < 75) return 'avanzado';
  return 'experto';
};

export default Skills;