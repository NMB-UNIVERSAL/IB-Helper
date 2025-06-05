import React, { useState, useEffect } from 'react'
import ScrollAnimation from '../components/ScrollAnimation'

interface HomePageProps {
  navigateTo: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [animateButtons, setAnimateButtons] = useState(false);

  useEffect(() => {
    // Trigger button animations after a delay
    const timer = setTimeout(() => {
      setAnimateButtons(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <ScrollAnimation animation="fade-up">
        <section className="welcome-section">
          <h1>Welcome to the IB Program Guide</h1>
          <p>
            This guide is designed to help IB students understand critical components of their program
            and master essential tools for academic success.
          </p>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={200}>
        <section className="section-container">
          <h2>IB Assessment Components</h2>
          <p>
            Learn about the key assessment components required for the IB Diploma:
          </p>
          <div className="button-container">
            <button 
              className={`nav-button ${animateButtons ? 'pulse-animation' : ''}`}
              onClick={() => navigateTo('ia')}
            >
              Internal Assessment Guide
            </button>
            <button 
              className="nav-button secondary"
              onClick={() => navigateTo('ee')}
            >
              Extended Essay Guide
            </button>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={400}>
        <section className="section-container">
          <h2>Essential Tools for IB Students</h2>
          <p>
            Master these powerful tools to enhance your data analysis, mathematical modeling, and presentation skills:
          </p>
          <div className="button-container">
            <button 
              className="nav-button"
              onClick={() => navigateTo('excel')}
              style={{ backgroundColor: '#217346' }} // Excel green
            >
              Microsoft Excel Guide
            </button>
            <button 
              className="nav-button"
              onClick={() => navigateTo('geogebra')}
              style={{ backgroundColor: '#9558B2' }} // GeoGebra purple
            >
              GeoGebra Guide
            </button>
            <button 
              className="nav-button"
              onClick={() => navigateTo('desmos')}
              style={{ backgroundColor: '#FF7F02' }} // Desmos orange
            >
              Desmos Guide
            </button>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={600}>
        <section className="gradient-border">
          <div className="section-container">
            <h2>About the IB Program</h2>
            <p>
              The International Baccalaureate (IB) Diploma Programme is a rigorous pre-university course of studies 
              that meets the needs of highly motivated students. The program is designed as a comprehensive two-year 
              curriculum that allows its graduates to fulfill requirements of various national education systems.
            </p>
            <div className="key-point">
              <p>
                <strong>Key components of assessment in the IB program include:</strong>
              </p>
              <ScrollAnimation animation="fade-in">
                <ul className="stagger-list animated">
                  <li>Internal Assessments (IAs) - School-based assessments marked by teachers and moderated by the IB</li>
                  <li>Extended Essay (EE) - An independent, self-directed piece of research</li>
                  <li>Theory of Knowledge (TOK) - Reflection on the nature of knowledge</li>
                  <li>Creativity, Activity, Service (CAS) - Experiential learning outside the classroom</li>
                  <li>Final Examinations - End of course written examinations</li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default HomePage 