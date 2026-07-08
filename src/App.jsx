import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import LandingSection from './components/sections/LandingSection'
import ImageSection from './components/sections/ImageSection'
import TextSection from './components/sections/TextSection'
import OCRSection from './components/sections/OCRSection'
import VideoSection from './components/sections/VideoSection'
import PostSection from './components/sections/PostSection'
import FilesSection from './components/sections/FilesSection'

function App() {
  const [activeSection, setActiveSection] = useState('landing')
  const [isLightMode, setIsLightMode] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [isLightMode])

  const handleProductChange = (product) => {
    setSelectedProduct(product)
    if (product === 'all') {
      setActiveSection('landing')
    } else if (product === 'marketing') {
      setActiveSection('text')
    } else if (product === 'video') {
      setActiveSection('video')
    }
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'landing':
        return <LandingSection onNavigate={setActiveSection} />
      case 'image':
        return <ImageSection />
      case 'text':
        return <TextSection />
      case 'ocr':
        return <OCRSection />
      case 'video':
        return <VideoSection />
      case 'post':
        return <PostSection />
      case 'files':
        return <FilesSection />
      default:
        return <LandingSection onNavigate={setActiveSection} />
    }
  }

  return (
    <div className="app-layout">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        selectedProduct={selectedProduct}
        onProductChange={handleProductChange}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="main-content">
        <Topbar
          isLightMode={isLightMode}
          onToggleTheme={() => setIsLightMode(!isLightMode)}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="workspace">
          {renderSection()}
        </div>
      </div>
    </div>
  )
}

export default App
