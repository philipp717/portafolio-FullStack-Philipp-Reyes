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

  // Datos de ejemplo para habilidades
  const skills: Skill[] = [
    // Frontend
    { id: 1, name: 'HTML5', icon: 'html5', level: 90, category: 'frontend' },
    { id: 2, name: 'CSS3', icon: 'css3-alt', level: 85, category: 'frontend' },
    { id: 3, name: 'JavaScript', icon: 'js', level: 88, category: 'frontend' },
    { id: 4, name: 'React', icon: 'react', level: 85, category: 'frontend' },
    { id: 5, name: 'Bootstrap', icon: 'bootstrap', level: 80, category: 'frontend' },
    { id: 6, name: 'TypeScript', icon: 'typescript', level: 75, category: 'frontend' },
    
    // Backend
    { id: 7, name: 'Node.js', icon: 'node-js', level: 82, category: 'backend' },
    { id: 8, name: 'Express', icon: 'node-js', level: 80, category: 'backend' },
    { id: 9, name: 'MongoDB', icon: 'database', level: 75, category: 'backend' },
    { id: 10, name: 'MySQL', icon: 'database', level: 78, category: 'backend' },
    { id: 11, name: 'Firebase', icon: 'fire', level: 70, category: 'backend' },
    { id: 12, name: 'RESTful API', icon: 'server', level: 85, category: 'backend' },
    
    // Herramientas
    { id: 13, name: 'Git', icon: 'git-alt', level: 88, category: 'tools' },
    { id: 14, name: 'GitHub', icon: 'github', level: 85, category: 'tools' },
    { id: 15, name: 'VS Code', icon: 'code', level: 90, category: 'tools' },
    { id: 16, name: 'Webpack', icon: 'js', level: 70, category: 'tools' },
    { id: 17, name: 'NPM', icon: 'npm', level: 85, category: 'tools' },
    { id: 18, name: 'Jest', icon: 'vial', level: 75, category: 'tools' }
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
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: getColorByLevel(skill.level) 
                      }}
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
                <div className="legend-color" style={{ backgroundColor: '#FFA500' }}></div>
                <span>INTERMEDIO (26-50%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#FFFF00' }}></div>
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

// Función para determinar el color según el nivel
const getColorByLevel = (level: number): string => {
  if (level < 25) return '#FF0000'; // Rojo
  if (level < 50) return '#FFA500'; // Naranja
  if (level < 75) return '#FFFF00'; // Amarillo
  return '#00FF00'; // Verde
};

export default Skills;