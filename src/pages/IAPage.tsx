import React from 'react'

interface IAPageProps {
  navigateTo: (page: string) => void
}

const IAPage: React.FC<IAPageProps> = ({ navigateTo }) => {
  return (
    <div className="page-container">
      <button 
        className="back-button"
        onClick={() => navigateTo('home')}
      >
        ← Back to Home
      </button>
      
      <h1>Internal Assessment (IA) Guide</h1>
      
      <section className="section-container">
        <h2>What is an Internal Assessment?</h2>
        <p>
          Internal Assessments (IAs) are a required component of all IB courses. They are school-based 
          assessments, marked by the subject teacher using assessment criteria provided by the IB, and 
          then moderated by IB examiners to ensure consistency across different schools worldwide.
        </p>
        
        <div className="key-point">
          <p><strong>Key characteristics of Internal Assessments:</strong></p>
          <ul>
            <li>Typically counts for 20-30% of the final IB subject grade</li>
            <li>Allows students to explore areas of personal interest within the subject</li>
            <li>Develops research and analytical skills essential for university education</li>
            <li>Assessed against clearly defined criteria rather than compared to other students' work</li>
            <li>Different formats across subjects (lab reports, essays, oral presentations, etc.)</li>
          </ul>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Internal Assessment Formats by Subject Group</h2>
        
        <h3>Group 1: Studies in Language and Literature</h3>
        <p>
          Typically includes an individual oral presentation analyzing literary works and their relation to 
          a global issue.
        </p>
        
        <h3>Group 2: Language Acquisition</h3>
        <p>
          Usually involves an individual oral assessment demonstrating communicative skills in the target language.
        </p>
        
        <h3>Group 3: Individuals and Societies</h3>
        <p>
          Often requires a research paper investigating a specific topic within the subject area.
        </p>
        
        <h3>Group 4: Sciences</h3>
        <p>
          Typically includes laboratory work or field research with a detailed write-up following the scientific method.
        </p>
        
        <h3>Group 5: Mathematics</h3>
        <p>
          Usually involves mathematical exploration of a topic of personal interest.
        </p>
        
        <h3>Group 6: The Arts</h3>
        <p>
          Often includes a portfolio, performance, or exhibition demonstrating artistic skills and understanding.
        </p>
      </section>
      
      <section className="section-container">
        <h2>General Structure of an Internal Assessment</h2>
        <p>
          While formats vary by subject, most IAs include these components:
        </p>
        
        <ol>
          <li><strong>Introduction</strong> - Stating the purpose and research question</li>
          <li><strong>Methodology</strong> - Explaining how the investigation was conducted</li>
          <li><strong>Results/Findings</strong> - Presenting data or evidence collected</li>
          <li><strong>Analysis</strong> - Interpreting the data and its significance</li>
          <li><strong>Conclusion</strong> - Summarizing findings and answering the research question</li>
          <li><strong>Evaluation</strong> - Discussing limitations and suggesting improvements</li>
          <li><strong>Bibliography</strong> - Citing all sources used</li>
          <li><strong>Appendices</strong> - Including supplementary materials if needed</li>
        </ol>
      </section>
      
      <section className="section-container">
        <h2>Example: Science IA Structure</h2>
        
        <div className="example-container">
          <h3>Chemistry IA Example: "The Effect of Temperature on the Rate of Reaction Between Sodium Thiosulfate and Hydrochloric Acid"</h3>
          
          <h4>1. Research Question</h4>
          <p>How does temperature (in the range of 20°C to 60°C) affect the rate of reaction between sodium thiosulfate and hydrochloric acid?</p>
          
          <h4>2. Background Information</h4>
          <p>Brief explanation of collision theory, activation energy, and factors affecting reaction rates.</p>
          
          <h4>3. Hypothesis</h4>
          <p>As temperature increases, the rate of reaction will increase due to higher kinetic energy of particles.</p>
          
          <h4>4. Variables</h4>
          <ul>
            <li><strong>Independent:</strong> Temperature of sodium thiosulfate solution</li>
            <li><strong>Dependent:</strong> Time taken for the reaction to reach completion</li>
            <li><strong>Controlled:</strong> Concentration of reagents, volume of reagents, etc.</li>
          </ul>
          
          <h4>5. Materials and Method</h4>
          <p>Detailed list of equipment and step-by-step procedure for the experiment.</p>
          
          <h4>6. Data Collection and Processing</h4>
          <p>Raw data tables, calculations, and processed data tables with appropriate units.</p>
          
          <h4>7. Conclusion and Evaluation</h4>
          <p>Analysis of results, comparison with theory, discussion of limitations, and suggestions for improvement.</p>
          
          <h4>8. Bibliography</h4>
          <p>List of all references used, formatted according to a consistent citation style.</p>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Tips for Success in Internal Assessments</h2>
        
        <ul>
          <li>Start early - Allow plenty of time for research, drafting, and revision</li>
          <li>Choose a topic that genuinely interests you</li>
          <li>Understand the assessment criteria thoroughly</li>
          <li>Maintain regular communication with your teacher for guidance</li>
          <li>Keep detailed records of your research and sources</li>
          <li>Pay attention to formatting requirements</li>
          <li>Use precise, academic language appropriate to the subject</li>
          <li>Include relevant visuals (graphs, tables, diagrams) to support your findings</li>
          <li>Proofread carefully to eliminate errors</li>
        </ul>
      </section>
      
      <button 
        className="back-button"
        onClick={() => navigateTo('home')}
        style={{ marginTop: '2rem' }}
      >
        ← Back to Home
      </button>
    </div>
  )
}

export default IAPage 