import React from 'react'
import VideoEmbed from '../components/VideoEmbed'

interface DesmosPageProps {
  navigateTo: (page: string) => void
}

const DesmosPage: React.FC<DesmosPageProps> = ({ navigateTo }) => {
  return (
    <div className="page-container">
      <button 
        className="back-button"
        onClick={() => navigateTo('home')}
      >
        ← Back to Home
      </button>
      
      <h1>Desmos Guide</h1>
      
      <section className="section-container">
        <h2>What is Desmos?</h2>
        <p>
          Desmos is a free online graphing calculator and mathematics tool that allows users to 
          plot functions, create interactive graphs, analyze data, and explore mathematical concepts. 
          It's particularly useful for IB Mathematics students due to its intuitive interface, 
          powerful capabilities, and excellent visualization tools.
        </p>
        
        <div className="key-point">
          <p><strong>Key features of Desmos:</strong></p>
          <ul>
            <li>Intuitive function graphing with real-time updates</li>
            <li>Parametric, polar, and implicit function support</li>
            <li>Interactive sliders to explore how parameters affect graphs</li>
            <li>Table input for plotting points and data</li>
            <li>Statistical analysis and regression capabilities</li>
            <li>Ability to save, share, and embed graphs</li>
            <li>Mobile app availability for on-the-go calculations</li>
          </ul>
        </div>
      </section>
      
      <section className="video-section">
        <h2>Desmos Tutorial Video</h2>
        <p>Watch this comprehensive guide to using Desmos for mathematical modeling and data analysis:</p>
        <VideoEmbed videoId="d2p1VUfDf5I" title="Desmos Tutorial for IB Students" />
      </section>
      
      <section className="section-container">
        <h2>Desmos Tools and Applications</h2>
        <p>
          Desmos offers several specialized tools for different mathematical needs:
        </p>
        
        <h3>Desmos Graphing Calculator</h3>
        <p>
          The core tool for plotting functions, equations, and inequalities. Ideal for visualizing 
          mathematical relationships and exploring function behavior.
        </p>
        
        <h3>Desmos Scientific Calculator</h3>
        <p>
          A simpler calculator for basic mathematical operations, trigonometric functions, and other 
          calculations without graphing capabilities.
        </p>
        
        <h3>Desmos Geometry Tool</h3>
        <p>
          A specialized tool for creating geometric constructions, exploring transformations, and 
          investigating geometric properties.
        </p>
        
        <h3>Desmos Four Function Calculator</h3>
        <p>
          A basic calculator for simple arithmetic operations, designed for elementary and middle school students.
        </p>
        
        <h3>Desmos Matrix Calculator</h3>
        <p>
          A specialized tool for matrix operations, including addition, multiplication, finding determinants, 
          and calculating inverses.
        </p>
      </section>
      
      <section className="section-container">
        <h2>Essential Desmos Functions for IB Math</h2>
        
        <h3>Basic Function Entry</h3>
        <ul>
          <li><strong>y = expression</strong> - Graph a function in terms of x</li>
          <li><strong>x = expression</strong> - Graph a function in terms of y</li>
          <li><strong>y1 ~ y2</strong> - Graph a region between two functions</li>
          <li><strong>y &lt; expression or y &gt; expression</strong> - Graph inequalities</li>
          <li><strong>r = expression</strong> - Graph in polar coordinates</li>
          <li><strong>parametric(x-expr, y-expr, parameter, min, max)</strong> - Graph parametric equations</li>
        </ul>
        
        <h3>Advanced Features</h3>
        <ul>
          <li><strong>Sliders</strong> - Create a variable with a slider using brackets: a = [1, 10]</li>
          <li><strong>Lists</strong> - Define a list with curly braces: L = {'{'} 1, 2, 3, 4 {'}'}</li>
          <li><strong>Piecewise Functions</strong> - Use {'{'} {'}'} with conditions: y = {'{'} x^2 if x &gt; 0, -x if x ≤ 0 {'}'}</li>
          <li><strong>Sequences</strong> - Generate number sequences: seq(n^2, n, 1, 10)</li>
          <li><strong>Statistical Functions</strong> - mean(list), median(list), stdev(list), etc.</li>
          <li><strong>Calculus</strong> - derivative(expression, variable), integral(expression, variable, lower, upper)</li>
        </ul>
        
        <h3>Table Features</h3>
        <ul>
          <li><strong>Manual Entry</strong> - Enter x,y pairs to plot points</li>
          <li><strong>Sequence Tables</strong> - Generate x-values using sequences</li>
          <li><strong>Calculated Columns</strong> - Create columns that calculate values based on other columns</li>
          <li><strong>Connected Points</strong> - Connect points with lines or show as discrete points</li>
        </ul>
      </section>
      
      <section className="section-container">
        <h2>Data Interpolation in Desmos</h2>
        <p>
          Desmos provides powerful tools for interpolating data and finding mathematical models 
          that fit your experimental results:
        </p>
        
        <div className="example-container">
          <h3>Methods for Data Interpolation in Desmos:</h3>
          
          <h4>1. Regression Analysis</h4>
          <ol>
            <li>Enter your data points in a table (x in column 1, y in column 2)</li>
            <li>Use regression commands to find the best-fitting function:</li>
            <ul>
              <li><code>y_1 ~ m x_1 + b</code> - Linear regression</li>
              <li><code>y_1 ~ a x_1^2 + b x_1 + c</code> - Quadratic regression</li>
              <li><code>y_1 ~ a x_1^3 + b x_1^2 + c x_1 + d</code> - Cubic regression</li>
              <li><code>y_1 ~ a e^{'{'} b x_1 {'}'}</code> - Exponential regression</li>
              <li><code>y_1 ~ a ln(x_1) + b</code> - Logarithmic regression</li>
              <li><code>y_1 ~ a sin(b x_1 + c) + d</code> - Sinusoidal regression</li>
              <li><code>y_1 ~ a / (1 + b e^{'{'} -c x_1 {'}'} )</code> - Logistic regression</li>
            </ul>
            <li>Desmos automatically calculates the best values for the parameters</li>
            <li>The regression line appears on the graph with your data points</li>
          </ol>
          
          <h4>2. Manual Function Fitting</h4>
          <p>For more control over the model:</p>
          <ol>
            <li>Enter your data in a table</li>
            <li>Create a function with parameters as sliders: <code>f(x) = a x^n + b</code></li>
            <li>Define the sliders: <code>a = [1]</code>, <code>n = [2]</code>, <code>b = [0]</code></li>
            <li>Adjust the sliders until the function visually fits your data</li>
          </ol>
          
          <h4>3. Residuals Analysis</h4>
          <p>To evaluate how well your model fits the data:</p>
          <ol>
            <li>After creating a regression model, define residuals: <code>r = y_1 - f(x_1)</code></li>
            <li>Plot residuals: <code>(x_1, r)</code></li>
            <li>Calculate sum of squared residuals: <code>ssr = sum(r^2)</code></li>
            <li>A good model has small, randomly distributed residuals</li>
          </ol>
          
          <h4>4. Interpolating Specific Values</h4>
          <p>To find values between data points:</p>
          <ol>
            <li>Create your regression model as described above</li>
            <li>Use the model function to evaluate specific x-values</li>
            <li>Add a point on the function: <code>(x_0, f(x_0))</code> where <code>x_0 = [5]</code></li>
            <li>Adjust the x_0 slider to find values at any point along the curve</li>
          </ol>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Using Desmos for IB Mathematics</h2>
        <p>
          Desmos is especially valuable for IB Mathematics coursework and assessments:
        </p>
        
        <ul>
          <li>
            <strong>Function Analysis</strong> - Explore domains, ranges, asymptotes, and critical points
          </li>
          <li>
            <strong>Data Visualization</strong> - Plot experimental data and find mathematical models
          </li>
          <li>
            <strong>Parametric and Polar Functions</strong> - Investigate more complex relationships
          </li>
          <li>
            <strong>Transformations</strong> - Visualize how functions change with different parameters
          </li>
          <li>
            <strong>Differential Calculus</strong> - Visualize derivatives and tangent lines
          </li>
          <li>
            <strong>Integral Calculus</strong> - Calculate areas under curves and between functions
          </li>
        </ul>
        
        <div className="key-point">
          <p><strong>Tips for Using Desmos in Your IB Math Coursework:</strong></p>
          <ul>
            <li>Create a free Desmos account to save your graphs for future reference</li>
            <li>Use descriptive titles and labels on your graphs</li>
            <li>Color-code different functions or data sets for clarity</li>
            <li>Use sliders to create interactive demonstrations</li>
            <li>Add notes to explain key features of your graphs</li>
            <li>Check your algebraic work by graphing both sides of equations</li>
            <li>Save different versions of complex graphs to show your process</li>
          </ul>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Exporting Desmos Work to Word</h2>
        <p>
          When including Desmos graphs and calculations in your IB assessments, 
          you'll need to export them to Word documents:
        </p>
        
        <h3>Method 1: Screenshot/Image Export</h3>
        <ol>
          <li>Set up your Desmos graph exactly as you want it to appear</li>
          <li>Click the share button (paper airplane icon) in the top right</li>
          <li>Select "Export Image" from the menu</li>
          <li>Choose image size and format (PNG recommended)</li>
          <li>Save the image to your computer</li>
          <li>In Word, use "Insert &gt; Pictures" to add the image to your document</li>
          <li>Resize as needed and add a caption</li>
        </ol>
        
        <h3>Method 2: Copy and Paste</h3>
        <ol>
          <li>Use your device's screenshot capability (e.g., PrtScn or Snipping Tool on Windows)</li>
          <li>Capture the relevant part of the Desmos graph</li>
          <li>Paste directly into Word (Ctrl+V)</li>
          <li>Crop and adjust the image as needed</li>
        </ol>
        
        <h3>Method 3: Share Link</h3>
        <ol>
          <li>Save your Desmos graph (requires an account)</li>
          <li>Click the share button and select "Copy Link"</li>
          <li>In your Word document, include the link as a footnote or reference</li>
          <li>For printed documents, consider using a URL shortener or QR code</li>
        </ol>
        
        <h3>Method 4: Export Data to Excel, Then to Word</h3>
        <ol>
          <li>If you have data in a Desmos table, select all cells</li>
          <li>Copy the data (Ctrl+C)</li>
          <li>Paste into Excel (Ctrl+V)</li>
          <li>Format in Excel as needed</li>
          <li>Follow the Excel-to-Word methods described in the Excel guide</li>
        </ol>
        
        <div className="key-point">
          <p><strong>Tips for Professional Integration:</strong></p>
          <ul>
            <li>Adjust the Desmos viewing window before exporting to focus on relevant features</li>
            <li>Use Desmos's built-in grid and axis labeling for clarity</li>
            <li>Include the equation(s) in the view when exporting</li>
            <li>Consider exporting both the graph and the table of values if relevant</li>
            <li>For regression analysis, include the regression equation and correlation coefficient</li>
            <li>Format all exported images consistently throughout your document</li>
            <li>When discussing specific points or features, highlight them in the Desmos graph before exporting</li>
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

export default DesmosPage 