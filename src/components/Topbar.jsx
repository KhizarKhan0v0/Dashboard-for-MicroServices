import React from 'react'

export default function Topbar({ isLightMode, onToggleTheme, onMenuToggle }) {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className="hamburger" onClick={onMenuToggle}>☰</button>
        <input type="text" className="search-bar" placeholder="Search projects or files..." />
      </div>
      <div className="top-right">
        <button className="theme-btn" onClick={onToggleTheme}>
          <span>{isLightMode ? '🌙' : '☀️'}</span>
          <span>{isLightMode ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
        <div className="user-profile">
          <span>🔔</span>
          <div className="avatar">IT</div>
          <span>Imhade</span>
        </div>
      </div>
    </header>
  )
}
