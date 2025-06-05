import { useState } from 'react'
import './App.css'
import './styles.css'

// Theme components
import { ThemeProvider } from './ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import ScrollIndicator from './components/ScrollIndicator'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

// Page components
import HomePage from './pages/HomePage.tsx'
import IAPage from './pages/IAPage.tsx'
import EEPage from './pages/EEPage.tsx'
import ExcelPage from './pages/ExcelPage.tsx'
import GeoGebraPage from './pages/GeoGebraPage.tsx'
import DesmosPage from './pages/DesmosPage.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <PageTransition transitionKey="home">
            <HomePage navigateTo={setCurrentPage} />
          </PageTransition>
        )
      case 'ia':
        return (
          <PageTransition transitionKey="ia">
            <IAPage navigateTo={setCurrentPage} />
          </PageTransition>
        )
      case 'ee':
        return (
          <PageTransition transitionKey="ee">
            <EEPage navigateTo={setCurrentPage} />
          </PageTransition>
        )
      case 'excel':
        return (
          <PageTransition transitionKey="excel">
            <ExcelPage navigateTo={setCurrentPage} />
          </PageTransition>
        )
      case 'geogebra':
        return (
          <PageTransition transitionKey="geogebra">
            <GeoGebraPage navigateTo={setCurrentPage} />
          </PageTransition>
        )
      case 'desmos':
        return (
          <PageTransition transitionKey="desmos">
            <DesmosPage navigateTo={setCurrentPage} />
          </PageTransition>
        )
      default:
        return (
          <PageTransition transitionKey="home">
            <HomePage navigateTo={setCurrentPage} />
          </PageTransition>
        )
    }
  }

  const AppContent = () => (
    <div className="app-container">
      <ScrollToTop currentPage={currentPage} />
      <ScrollIndicator />
      <header>
        <h1 onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          IB Program Guide
        </h1>
        <ThemeToggle />
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <p>© {new Date().getFullYear()} IB Program Guide - A resource for IB students</p>
      </footer>
    </div>
  );

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
