import React from 'react'
import VideoEmbed from '../components/VideoEmbed'

interface ExcelPageProps {
  navigateTo: (page: string) => void
}

const ExcelPage: React.FC<ExcelPageProps> = ({ navigateTo }) => {
  return (
    <div className="page-container">
      <button 
        className="back-button"
        onClick={() => navigateTo('home')}
      >
        ← Back to Home
      </button>
      
      <h1>Microsoft Excel Guide</h1>
      
      <section className="section-container">
        <h2>What is Microsoft Excel?</h2>
        <p>
          Microsoft Excel is a powerful spreadsheet program that allows users to organize, analyze, 
          and visualize data. It's an essential tool for IB students, particularly for Internal Assessments 
          in sciences, mathematics, and business subjects where data analysis is required.
        </p>
        
        <div className="key-point">
          <p><strong>Key features of Microsoft Excel:</strong></p>
          <ul>
            <li>Organize data in rows and columns</li>
            <li>Perform calculations using formulas and functions</li>
            <li>Create charts and graphs to visualize data</li>
            <li>Analyze data using statistical tools</li>
            <li>Create pivot tables for data summarization</li>
            <li>Automate tasks using macros</li>
          </ul>
        </div>
      </section>
      
      <section className="video-section">
        <h2>Excel Tutorial Video</h2>
        <p>Watch this comprehensive guide to mastering Excel for academic projects:</p>
        <VideoEmbed videoId="LgXzzu68j7M" title="Excel Tutorial for IB Students" />
      </section>
      
      <section className="section-container">
        <h2>Basic Excel Functions for IB Students</h2>
        
        <h3>Mathematical Functions</h3>
        <ul>
          <li><strong>SUM(range)</strong> - Adds all numbers in a range of cells</li>
          <li><strong>AVERAGE(range)</strong> - Calculates the arithmetic mean of numbers</li>
          <li><strong>MIN(range)</strong> - Finds the smallest number in a range</li>
          <li><strong>MAX(range)</strong> - Finds the largest number in a range</li>
          <li><strong>COUNT(range)</strong> - Counts the number of cells that contain numbers</li>
          <li><strong>ROUND(number, digits)</strong> - Rounds a number to a specified number of digits</li>
        </ul>
        
        <h3>Statistical Functions</h3>
        <ul>
          <li><strong>STDEV.S(range)</strong> - Calculates sample standard deviation</li>
          <li><strong>STDEV.P(range)</strong> - Calculates population standard deviation</li>
          <li><strong>VAR.S(range)</strong> - Calculates sample variance</li>
          <li><strong>MEDIAN(range)</strong> - Finds the middle value in a range</li>
          <li><strong>CORREL(range1, range2)</strong> - Calculates correlation coefficient</li>
          <li><strong>PERCENTILE.INC(range, k)</strong> - Returns the k-th percentile of values</li>
        </ul>
        
        <h3>Logical Functions</h3>
        <ul>
          <li><strong>IF(condition, value_if_true, value_if_false)</strong> - Performs a logical test</li>
          <li><strong>AND(condition1, condition2, ...)</strong> - Returns TRUE if all conditions are true</li>
          <li><strong>OR(condition1, condition2, ...)</strong> - Returns TRUE if any condition is true</li>
          <li><strong>NOT(logical)</strong> - Reverses the logical value</li>
        </ul>
      </section>
      
      <section className="section-container">
        <h2>Data Interpolation in Excel</h2>
        <p>
          Interpolation is the process of estimating unknown values that fall between known data points.
          This is particularly useful in scientific IAs when you need to estimate values between measured data points.
        </p>
        
        <div className="example-container">
          <h3>Methods for Data Interpolation in Excel:</h3>
          
          <h4>1. Linear Interpolation Using FORECAST Function</h4>
          <p>The FORECAST function estimates a future value using existing values:</p>
          <p><code>=FORECAST(x, known_y's, known_x's)</code></p>
          <p>where:</p>
          <ul>
            <li><strong>x</strong> is the data point for which you want to predict a value</li>
            <li><strong>known_y's</strong> is the range of dependent values (your measured results)</li>
            <li><strong>known_x's</strong> is the range of independent values (your input values)</li>
          </ul>
          
          <h4>2. Using TREND Function for Multiple Linear Interpolation</h4>
          <p><code>=TREND(known_y's, known_x's, new_x's)</code></p>
          
          <h4>3. Creating a Trendline in a Scatter Plot</h4>
          <ol>
            <li>Create a scatter plot with your data points</li>
            <li>Right-click on the data series and select "Add Trendline"</li>
            <li>Choose the type of trendline (linear, exponential, polynomial, etc.)</li>
            <li>Check "Display Equation on chart" to see the formula</li>
            <li>Use this equation to calculate interpolated values</li>
          </ol>
        </div>
      </section>
      
      <section className="section-container">
        <h2>Creating Charts and Graphs in Excel</h2>
        <p>
          Visual representation of data is essential for IB internal assessments and extended essays.
          Excel offers various chart types to visualize your data effectively:
        </p>
        
        <ul>
          <li>
            <strong>Scatter Plots</strong> - Best for showing correlation between two variables. 
            Ideal for experimental data in science IAs.
          </li>
          <li>
            <strong>Line Charts</strong> - Good for showing trends over time or sequences.
          </li>
          <li>
            <strong>Bar/Column Charts</strong> - Effective for comparing categories or groups.
          </li>
          <li>
            <strong>Pie Charts</strong> - Useful for showing proportions of a whole.
          </li>
          <li>
            <strong>Histograms</strong> - For displaying frequency distributions of data.
          </li>
          <li>
            <strong>Box Plots</strong> - Show statistical distribution including median and quartiles.
          </li>
        </ul>
        
        <p>
          To create a chart in Excel:
        </p>
        <ol>
          <li>Select the data you want to include in the chart</li>
          <li>Go to the "Insert" tab and choose the appropriate chart type</li>
          <li>Customize the chart using Chart Design and Format tools</li>
          <li>Add appropriate titles, axis labels, and a legend</li>
          <li>Format the chart to follow academic standards</li>
        </ol>
      </section>
      
      <section className="section-container">
        <h2>Exporting Excel Data to Word</h2>
        <p>
          For your IB assignments, you'll often need to include Excel data and charts in your Word documents.
          Here are several methods to do this:
        </p>
        
        <h3>Method 1: Copy and Paste</h3>
        <ol>
          <li>Select the cells, table, or chart you want to export in Excel</li>
          <li>Press Ctrl+C or right-click and select "Copy"</li>
          <li>Open your Word document</li>
          <li>Position your cursor where you want to paste the content</li>
          <li>Press Ctrl+V or right-click and select "Paste"</li>
          <li>Use "Paste Special" options if you want to paste as a picture or link to the Excel file</li>
        </ol>
        
        <h3>Method 2: Embedding an Excel Chart</h3>
        <ol>
          <li>In Excel, select the chart you want to include</li>
          <li>Copy the chart (Ctrl+C)</li>
          <li>In Word, use Paste Special (Ctrl+Alt+V)</li>
          <li>Select "Paste as Microsoft Excel Chart Object"</li>
          <li>This embeds the chart, allowing you to edit it in Word by double-clicking</li>
        </ol>
        
        <h3>Method 3: Linking Excel Data</h3>
        <ol>
          <li>In Word, go to the "Insert" tab</li>
          <li>Click "Object" and select "Object" from the dropdown</li>
          <li>Choose "Create from File" tab</li>
          <li>Browse to your Excel file</li>
          <li>Check "Link to file" to create a link that updates when the Excel file changes</li>
        </ol>
        
        <div className="key-point">
          <p><strong>Tips for Professional Integration:</strong></p>
          <ul>
            <li>Ensure your table formatting is consistent with your document style</li>
            <li>For charts, use high-quality images (at least 300 dpi)</li>
            <li>Always include proper captions and references for tables and figures</li>
            <li>When embedding charts, make sure they remain editable for last-minute changes</li>
            <li>If your data may change, use linking to keep your Word document updated</li>
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

export default ExcelPage 