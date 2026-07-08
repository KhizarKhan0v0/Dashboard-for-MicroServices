import React from 'react'

const menuItems = [
  { id: 'landing', icon: '🏠', label: 'Home', product: 'all', isHome: true },
  { id: 'text', icon: '📝', label: 'Text Formatting', product: 'marketing' },
  { id: 'image', icon: '🖼️', label: 'Image Generation', product: 'marketing' },
  { id: 'video', icon: '🎥', label: 'Video Editing', product: 'video' },
  { id: 'ocr', icon: '🔍', label: 'OCR Text Extract', product: 'all' },
  { id: 'post', icon: '📱', label: 'Post Generation', product: 'marketing' },
  { id: 'files', icon: '📁', label: 'Shared Files (S3)', product: 'all' },
]

export default function Sidebar({ activeSection, onNavigate, selectedProduct, onProductChange, isOpen, onClose }) {
  const filteredItems = menuItems.filter(
    item => selectedProduct === 'all' || item.product === selectedProduct || item.product === 'all'
  )

  const homeItem = filteredItems.find(i => i.isHome)
  const toolItems = filteredItems.filter(i => !i.isHome)
  const libraryItems = toolItems.filter(i => i.id === 'files')
  const microserviceItems = toolItems.filter(i => i.id !== 'files')

  const handleClick = (id) => {
    onNavigate(id)
    onClose()
  }

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-area">
          <div className="logo">⚡ Creator Studio</div>
          <select
            className="product-select"
            value={selectedProduct}
            onChange={(e) => onProductChange(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="marketing">Marketing Suite</option>
            <option value="video">Video Production</option>
          </select>
        </div>
        <nav className="menu">
          {homeItem && (
            <div
              className={`menu-item home-item ${activeSection === homeItem.id ? 'active' : ''}`}
              onClick={() => handleClick(homeItem.id)}
            >
              {homeItem.icon} {homeItem.label}
            </div>
          )}

          {microserviceItems.length > 0 && (
            <>
              <div className="menu-label first-label">Microservices Tools</div>
              {microserviceItems.map(item => (
                <div
                  key={item.id}
                  className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.icon} {item.label}
                </div>
              ))}
            </>
          )}

          {libraryItems.length > 0 && (
            <>
              <div className="menu-label library-label">Library</div>
              {libraryItems.map(item => (
                <div
                  key={item.id}
                  className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.icon} {item.label}
                </div>
              ))}
            </>
          )}
        </nav>
      </aside>
    </>
  )
}
