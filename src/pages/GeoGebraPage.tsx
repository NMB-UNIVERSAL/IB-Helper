import React from 'react'
import VideoEmbed from '../components/VideoEmbed'

interface GeoGebraPageProps {
  navigateTo: (page: string) => void
}

const GeoGebraPage: React.FC<GeoGebraPageProps> = ({ navigateTo }) => {
  return (
    <div className="page-container">
      <button 
        className="back-button"
        onClick={() => navigateTo('home')}
      >
        ← Back to Home
      </button>
      
      <h1>GeoGebra Guide</h1>
      
      <section className="section-container">
        <h2>What is GeoGebra?</h2>
        <p>
          GeoGebra is a free, interactive mathematics software that combines geometry, algebra, 
          statistics, calculus, and more in one easy-to-use package. It's an invaluable tool for 
          IB Mathematics students, particularly for creating visualizations, exploring mathematical 
          concepts, and developing materials for Internal Assessments.
        </p>
        
        <div className="key-point">
          <p><strong>Key features of GeoGebra:</strong></p>
          <ul>
            <li>Dynamic geometry: Create interactive geometric constructions</li>
            <li>Algebraic manipulation: Define and work with functions, equations, and coordinates</li>
            <li>Spreadsheet functionality: Input data and perform calculations</li>
            <li>Statistical analysis: Create various plots and calculate statistical measures</li>
            <li>Calculus tools: Differentiation, integration, and function analysis</li>
            <li>3D graphing: Visualize three-dimensional objects and functions</li>
            <li>CAS (Computer Algebra System): Perform symbolic calculations</li>
          </ul>
        </div>
      </section>
      
      <section className="video-section">
        <h2>GeoGebra Tutorial Video</h2>
        <p>Watch this comprehensive guide to using GeoGebra for mathematical explorations:</p>
        <VideoEmbed videoId="I6LD7NbW9OM" title="GeoGebra Tutorial for IB Students" />
      </section>
      
      <section className="section-container">
        <h2>GeoGebra Applications</h2>
        <p>
          GeoGebra offers several specialized applications for different mathematical purposes:
        </p>
        
        <h3>GeoGebra Classic</h3>
        <p>
          The full suite with all tools and views (Algebra, Geometry, Spreadsheet, CAS, 3D Graphics, Probability).
          Ideal for comprehensive mathematical exploration.
        </p>
        
        <h3>GeoGebra Graphing Calculator</h3>
        <p>
          Focused on plotting functions, investigating equations, and finding special points of functions.
          Useful for calculus, function analysis, and coordinate geometry.
        </p>
        
        <h3>GeoGebra Geometry</h3>
        <p>
          Specialized in geometric constructions, measurements, and transformations.
          Perfect for exploring geometric theorems and properties.
        </p>
        
        <h3>GeoGebra 3D Calculator</h3>
        <p>
          For creating and investigating three-dimensional objects, surfaces, and functions.
          Helpful for visualizing complex 3D relationships.
        </p>
        
        <h3>GeoGebra CAS Calculator</h3>
        <p>
          Focused on symbolic calculation capabilities for algebraic manipulations.
          Great for solving equations, factoring expressions, and working with matrices.
        </p>
      </section>
      
      <section className="section-container">
        <h2>Essential GeoGebra Functions for IB Math</h2>
        
        <h3>Geometry Tools</h3>
        <ul>
          <li><strong>Points, Lines, and Polygons</strong> - Create basic geometric objects</li>
          <li><strong>Circles and Arcs</strong> - Construct circular objects</li>
          <li><strong>Angle and Distance Measurement</strong> - Quantify geometric properties</li>
          <li><strong>Transformations</strong> - Apply reflections, rotations, translations, and dilations</li>
          <li><strong>Locus</strong> - Trace the path of a point under constraints</li>
        </ul>
        
        <h3>Algebraic Functions</h3>
        <ul>
          <li><strong>Function Plotting</strong> - Graph functions in 2D and 3D</li>
          <li><strong>Parametric Curves</strong> - Create curves defined by parameter equations</li>
          <li><strong>Implicit Curves</strong> - Visualize equations that can't be expressed as y=f(x)</li>
          <li><strong>Sequence and Series</strong> - Generate and visualize sequences</li>
          <li><strong>Piecewise Functions</strong> - Define functions with different rules for different domains</li>
        </ul>
        
        <h3>Calculus Tools</h3>
        <ul>
          <li><strong>Derivative</strong> - Calculate and graph derivatives of functions</li>
          <li><strong>Integral</strong> - Compute definite and indefinite integrals</li>
          <li><strong>Critical Points</strong> - Find maxima, minima, and inflection points</li>
          <li><strong>Tangent Lines</strong> - Construct tangent lines to curves at specific points</li>
          <li><strong>Area Between Curves</strong> - Calculate and visualize areas between functions</li>
        </ul>
        
        <h3>Statistical Tools</h3>
        <ul>
          <li><strong>Data Input and Analysis</strong> - Enter and manipulate data sets</li>
          <li><strong>Statistical Plots</strong> - Create histograms, box plots, scatter plots, etc.</li>
          <li><strong>Regression Analysis</strong> - Find best-fit lines and curves for data</li>
          <li><strong>Probability Distributions</strong> - Work with normal, binomial, and other distributions</li>
        </ul>
      </section>
      
      <section className="section-container">
        <h2>Data Interpolation in GeoGebra</h2>
        <p>
          GeoGebra provides powerful tools for data interpolation, which is useful when you need to 
          estimate values between known data points or find a mathematical model that fits your data:
        </p>
        
        <div className="example-container">
          <h3>Methods for Data Interpolation in GeoGebra:</h3>
          
          <h4>1. Linear Regression (Best-Fit Line)</h4>
          <ol>
            <li>Enter your data points in the Spreadsheet view</li>
            <li>Select the data and use "Create &gt; List of Points" to visualize them</li>
            <li>Use the FitLine command: <code>FitLine[list of points]</code></li>
            <li>GeoGebra will create the line of best fit and show its equation</li>
          </ol>
          
          <h4>2. Polynomial Regression</h4>
          <p>For non-linear relationships, use polynomial regression commands:</p>
          <ul>
            <li><code>FitPoly[list of points, degree]</code> - Creates a polynomial of specified degree</li>
            <li><code>FitExp[list of points]</code> - Creates an exponential function</li>
            <li><code>FitLog[list of points]</code> - Creates a logarithmic function</li>
            <li><code>FitPow[list of points]</code> - Creates a power function</li>
            <li><code>FitSin[list of points]</code> - Creates a sinusoidal function</li>
          </ul>
          
          <h4>3. Spline Interpolation</h4>
          <p>
            For smooth curves that pass through all data points:
          </p>
          <p><code>Spline[list of points]</code> creates a smooth curve passing through all points</p>
          
          <h4>4. Function Inspector</h4>
          <p>
            After creating your interpolation function, use the Function Inspector tool to:
          </p>
          <ul>
            <li>Find specific values at any input (even between known data points)</li>
            <li>Analyze intervals and determine key characteristics</li>
            <li>Calculate derivatives and integrals of the interpolation function</li>
          </ul>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Using GeoGebra for IB Mathematics Internal Assessment</h2>
        <p>
          GeoGebra is particularly valuable for IB Mathematics Internal Assessments, as it allows you to:
        </p>
        
        <ul>
          <li>
            <strong>Visualize Mathematical Concepts</strong> - Create clear, dynamic illustrations of your mathematical ideas
          </li>
          <li>
            <strong>Test Conjectures</strong> - Quickly verify or disprove mathematical hypotheses
          </li>
          <li>
            <strong>Analyze Real-World Data</strong> - Import and process data for mathematical modeling
          </li>
          <li>
            <strong>Generate Multiple Examples</strong> - Test many cases to support generalizations
          </li>
          <li>
            <strong>Create Animations</strong> - Demonstrate how mathematical systems change over time
          </li>
        </ul>
        
        <div className="key-point">
          <p><strong>Tips for Using GeoGebra in Your IA:</strong></p>
          <ul>
            <li>Start with a clear mathematical question or exploration topic</li>
            <li>Create GeoGebra files that directly investigate your research question</li>
            <li>Take screenshots of key visualizations to include in your IA</li>
            <li>Use GeoGebra to verify calculations and test different scenarios</li>
            <li>Include dynamic elements when possible (sliders, checkboxes) to show how variables affect outcomes</li>
            <li>Save your GeoGebra files to include as appendices to your IA</li>
          </ul>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Exporting GeoGebra Work to Word</h2>
        <p>
          When incorporating GeoGebra work into your IB assessments, you'll need to export your 
          constructions and results to Word documents. Here are several methods:
        </p>
        
        <h3>Method 1: Screenshot/Image Export</h3>
        <ol>
          <li>In GeoGebra, set up your construction exactly as you want it to appear</li>
          <li>Go to "File &gt; Export &gt; Graphics View as Picture"</li>
          <li>Choose your preferred format (PNG is recommended for quality)</li>
          <li>Save the image to your computer</li>
          <li>In Word, use "Insert &gt; Pictures" to add the image to your document</li>
          <li>Resize as needed and add a proper caption</li>
        </ol>
        
        <h3>Method 2: Copy and Paste</h3>
        <ol>
          <li>In GeoGebra, select the Graphics View</li>
          <li>Press Ctrl+C or use "Edit &gt; Copy"</li>
          <li>In Word, position your cursor where you want to insert the image</li>
          <li>Press Ctrl+V or use "Home &gt; Paste"</li>
          <li>Use Word's picture formatting tools to adjust as needed</li>
        </ol>
        
        <h3>Method 3: Export as PDF</h3>
        <ol>
          <li>Go to "File &gt; Export &gt; Graphics View as PDF"</li>
          <li>In Word, use "Insert &gt; Object" and select the PDF file</li>
          <li>This method maintains high resolution for printing</li>
        </ol>
        
        <h3>Method 4: Export Data to Excel, Then to Word</h3>
        <ol>
          <li>If you have data in the Spreadsheet View, select the cells</li>
          <li>Copy the selection (Ctrl+C)</li>
          <li>Paste into Excel (Ctrl+V)</li>
          <li>Format in Excel as needed</li>
          <li>Follow the Excel-to-Word export methods mentioned in the Excel guide</li>
        </ol>
        
        <div className="key-point">
          <p><strong>Tips for Professional Integration:</strong></p>
          <ul>
            <li>Use high-resolution images (at least 300 dpi) for print documents</li>
            <li>Remove unnecessary elements from your GeoGebra view before exporting</li>
            <li>Use consistent visual styles across all GeoGebra exports</li>
            <li>Include descriptive captions explaining what each GeoGebra figure demonstrates</li>
            <li>For interactive elements, consider including a QR code or link to a shared GeoGebra file</li>
            <li>When showing multiple related constructions, maintain consistent viewpoints and scales</li>
          </ul>
        </div>
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

export default GeoGebraPage 