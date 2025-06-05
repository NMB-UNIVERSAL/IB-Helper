import { useState } from 'react'
import './App.css'
import './styles.css'

// Theme components
import { ThemeProvider } from './ThemeContext'
import ThemeToggle from './components/ThemeToggle'

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
        return <HomePage navigateTo={setCurrentPage} />
      case 'ia':
        return <IAPage navigateTo={setCurrentPage} />
      case 'ee':
        return <EEPage navigateTo={setCurrentPage} />
      case 'excel':
        return <ExcelPage navigateTo={setCurrentPage} />
      case 'geogebra':
        return <GeoGebraPage navigateTo={setCurrentPage} />
      case 'desmos':
        return <DesmosPage navigateTo={setCurrentPage} />
      default:
        return <HomePage navigateTo={setCurrentPage} />
    }
  }

  const AppContent = () => (
    <div className="app-container">
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
