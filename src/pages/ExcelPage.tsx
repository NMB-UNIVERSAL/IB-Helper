import React from 'react'
import VideoEmbed from '../components/VideoEmbed'
import ScrollAnimation from '../components/ScrollAnimation'

interface ExcelPageProps {
  navigateTo: (page: string) => void
}

const ExcelPage: React.FC<ExcelPageProps> = ({ navigateTo }) => {
  return (
    <div className="page-container">
      <ScrollAnimation animation="slide-right">
        <button className="back-button" onClick={() => navigateTo('home')}>
          &larr; Back to Home
        </button>
        
        <h1>Microsoft Excel Guide for IB Students</h1>
        <p>
          Microsoft Excel is a powerful tool for data analysis, visualization, and calculations. As an IB student,
          mastering Excel will help you with various subjects, particularly in sciences, mathematics, and economics.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <section className="section-container">
          <h2>Key Excel Functions for IB Students</h2>
          <div className="key-point">
            <p>
              <strong>Data Analysis Functions:</strong>
            </p>
            <ul>
              <li><code>AVERAGE()</code>, <code>MEDIAN()</code>, <code>MODE()</code> - Basic statistical functions</li>
              <li><code>STDEV.P()</code>, <code>STDEV.S()</code> - Calculate standard deviation</li>
              <li><code>CORREL()</code> - Find correlation between two variables</li>
              <li><code>LINEST()</code> - Perform linear regression analysis</li>
              <li><code>TREND()</code> - Create best-fit linear trend line</li>
            </ul>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={200}>
        <section className="section-container">
          <h2>Data Interpolation and Extrapolation</h2>
          <p>
            For IB science experiments and mathematics, you'll often need to interpolate or extrapolate values from data sets.
          </p>
          
          <div className="example-container">
            <h3>How to Interpolate Values:</h3>
            <ol>
              <li>Create a scatter plot of your data</li>
              <li>Add a trendline (linear, polynomial, exponential, etc.)</li>
              <li>Display the equation on the chart</li>
              <li>Use the equation to calculate values within your data range (interpolation) or beyond it (extrapolation)</li>
            </ol>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={300}>
        <section className="section-container">
          <h2>Creating Charts for IB Reports</h2>
          <p>
            Effective data visualization is crucial for IB reports. Excel offers various chart types suitable for different data.
          </p>
          
          <div className="key-point">
            <p>
              <strong>Recommended Chart Types:</strong>
            </p>
            <ul>
              <li>Scatter plots - For showing relationships between variables</li>
              <li>Line charts - For time series or continuous data</li>
              <li>Bar/Column charts - For comparing categorical data</li>
              <li>Box plots - For showing distribution (use Analysis ToolPak)</li>
              <li>Error bars - Essential for scientific data to show uncertainty</li>
            </ul>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={400}>
        <section className="section-container">
          <h2>Exporting Excel Data to Word Documents</h2>
          <p>
            For IA and EE reports, you'll need to transfer your Excel data to Word documents properly.
          </p>
          
          <div className="example-container">
            <h3>Best Practices for Excel to Word:</h3>
            <ol>
              <li>Use "Copy as Picture" for charts (preserves quality)</li>
              <li>Use "Paste Special" → "Microsoft Excel Chart Object" to maintain editability</li>
              <li>For tables, use "Copy as Picture" or "Paste Special" → "Formatted Text"</li>
              <li>Always include proper captions and references</li>
            </ol>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="zoom-in" delay={500}>
        <div className="video-section">
          <h2>Excel Tutorial Videos</h2>
          <p>
            The following video tutorials will help you master Excel for your IB work:
          </p>
          <VideoEmbed 
            videoId="Vl0H-qTclOg" 
            title="Excel for Data Analysis - IB Math and Science" 
          />
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default ExcelPage 