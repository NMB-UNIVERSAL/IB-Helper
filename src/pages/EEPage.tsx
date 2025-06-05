import React from 'react'

interface EEPageProps {
  navigateTo: (page: string) => void
}

const EEPage: React.FC<EEPageProps> = ({ navigateTo }) => {
  return (
    <div className="page-container">
      <button 
        className="back-button"
        onClick={() => navigateTo('home')}
      >
        ← Back to Home
      </button>
      
      <h1>Extended Essay (EE) Guide</h1>
      
      <section className="section-container">
        <h2>What is the Extended Essay?</h2>
        <p>
          The Extended Essay (EE) is a required component of the IB Diploma Programme. It is an independent, 
          self-directed piece of research, culminating in a 4,000-word paper. The Extended Essay provides practical 
          preparation for undergraduate research and an opportunity for students to investigate a topic of special 
          interest to them, related to one of the student's six DP subjects.
        </p>
        
        <div className="key-point">
          <p><strong>Key characteristics of the Extended Essay:</strong></p>
          <ul>
            <li>Maximum of 4,000 words in length</li>
            <li>Required for all IB Diploma candidates</li>
            <li>Externally assessed by IB examiners</li>
            <li>Combined with TOK for up to 3 additional points toward the diploma</li>
            <li>Completed with the guidance of a supervisor (usually a teacher at your school)</li>
            <li>Develops skills in research, analysis, evaluation, and communication</li>
          </ul>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Subject Areas for Extended Essays</h2>
        <p>
          Extended Essays are categorized according to the subject in which they are registered. There are six 
          subject groups, plus interdisciplinary options:
        </p>
        
        <ul>
          <li><strong>Group 1:</strong> Studies in Language and Literature</li>
          <li><strong>Group 2:</strong> Language Acquisition</li>
          <li><strong>Group 3:</strong> Individuals and Societies</li>
          <li><strong>Group 4:</strong> Sciences</li>
          <li><strong>Group 5:</strong> Mathematics</li>
          <li><strong>Group 6:</strong> The Arts</li>
          <li><strong>Interdisciplinary:</strong> World Studies, combining two IB subjects</li>
        </ul>
        
        <p>
          Each subject area has specific requirements and assessment criteria. It's important to choose a subject 
          that you are studying at Higher Level (HL) or one in which you have significant background knowledge.
        </p>
      </section>
      
      <section className="section-container">
        <h2>The Extended Essay Process</h2>
        
        <ol>
          <li>
            <strong>Choose a subject area and develop a research question</strong>
            <p>Select a subject that interests you and formulate a focused, specific research question.</p>
          </li>
          <li>
            <strong>Appoint a supervisor</strong>
            <p>Work with a teacher who has expertise in your chosen subject area.</p>
          </li>
          <li>
            <strong>Undertake preliminary research</strong>
            <p>Gather information from a variety of sources to understand the topic better.</p>
          </li>
          <li>
            <strong>Create a detailed outline</strong>
            <p>Plan the structure of your essay, including all major sections.</p>
          </li>
          <li>
            <strong>Conduct in-depth research</strong>
            <p>Collect data, analyze sources, and develop your argument.</p>
          </li>
          <li>
            <strong>Write the first draft</strong>
            <p>Begin writing your essay based on your outline and research.</p>
          </li>
          <li>
            <strong>Receive feedback</strong>
            <p>Submit your draft to your supervisor for comments and suggestions.</p>
          </li>
          <li>
            <strong>Revise and edit</strong>
            <p>Refine your essay based on feedback and further reflection.</p>
          </li>
          <li>
            <strong>Complete final draft</strong>
            <p>Finalize your essay, ensuring it meets all requirements.</p>
          </li>
          <li>
            <strong>Submit the essay</strong>
            <p>Turn in your essay to your IB coordinator by the school's internal deadline.</p>
          </li>
        </ol>
      </section>
      
      <section className="section-container">
        <h2>Structure of the Extended Essay</h2>
        
        <div className="example-container">
          <h3>Standard Extended Essay Structure</h3>
          
          <h4>Title Page</h4>
          <ul>
            <li>Title of the essay</li>
            <li>Research question</li>
            <li>Subject the essay is registered in</li>
            <li>Category (for languages)</li>
            <li>Word count</li>
          </ul>
          
          <h4>Contents Page</h4>
          <p>List of chapters, sections, and subsections with page numbers.</p>
          
          <h4>Introduction</h4>
          <p>
            Explains the significance of the topic, contextualizes the research question, and outlines 
            the methodology and scope of the investigation.
          </p>
          
          <h4>Body (Main Section)</h4>
          <p>
            Contains the development of the argument, analysis, and integration of evidence. Divided into 
            chapters, sections, and subsections as appropriate.
          </p>
          
          <h4>Conclusion</h4>
          <p>
            Synthesizes findings and explicitly answers the research question. Evaluates the strengths and 
            limitations of the investigation.
          </p>
          
          <h4>References and Bibliography</h4>
          <p>
            Lists all sources cited in the essay using a consistent citation style (MLA, APA, Chicago, etc.).
          </p>
          
          <h4>Appendices (if applicable)</h4>
          <p>
            Contains supplementary information that supports the essay but is not essential for the argument.
            Not included in the word count.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Assessment Criteria</h2>
        <p>
          The Extended Essay is assessed against five criteria, with a total of 34 possible points:
        </p>
        
        <ol>
          <li>
            <strong>Focus and Method (6 points)</strong>
            <p>The topic, research question, methodology, and sources.</p>
          </li>
          <li>
            <strong>Knowledge and Understanding (6 points)</strong>
            <p>Context, subject-specific terminology and concepts.</p>
          </li>
          <li>
            <strong>Critical Thinking (12 points)</strong>
            <p>Research, analysis, discussion, and evaluation.</p>
          </li>
          <li>
            <strong>Presentation (4 points)</strong>
            <p>Structure, layout, and formal elements.</p>
          </li>
          <li>
            <strong>Engagement (6 points)</strong>
            <p>Process, research focus, and reflections.</p>
          </li>
        </ol>
        
        <p>
          The final grade for the Extended Essay is combined with the grade for Theory of Knowledge (TOK) 
          to determine if the student receives up to 3 additional points toward their IB Diploma.
        </p>
      </section>
      
      <section className="section-container">
        <h2>Tips for Success in the Extended Essay</h2>
        
        <ul>
          <li>Choose a topic that genuinely interests you</li>
          <li>Ensure your research question is specific and focused</li>
          <li>Start early and create a detailed timeline for completion</li>
          <li>Maintain regular meetings with your supervisor</li>
          <li>Keep detailed notes on all sources</li>
          <li>Use a variety of high-quality, academic sources</li>
          <li>Create an outline before beginning to write</li>
          <li>Follow IB guidelines regarding formatting and structure</li>
          <li>Pay attention to the assessment criteria</li>
          <li>Allow time for multiple revisions</li>
          <li>Be meticulous with citations and references</li>
          <li>Stay within the 4,000-word limit</li>
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

export default EEPage 