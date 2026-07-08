import React from 'react'

export default function LandingSection({ onNavigate }) {
  const tools = [
    { id: 'text', icon: '📝', title: 'Text Formatting', desc: 'Format, rewrite, and clean up your copy seamlessly.' },
    { id: 'image', icon: '🖼️', title: 'Image Gen', desc: 'Generate high-quality images from text prompts.' },
    { id: 'video', icon: '🎥', title: 'Video Editor', desc: 'Cloud-based timeline editor for your video content.' },
  ]

  return (
    <div className="workspace-section">
      <div className="landing-center">
        <div className="landing-emoji">✨</div>
        <h1 className="landing-title">Create something great today</h1>
        <p className="landing-subtitle">Write, design, build, and so much more with AI tools for every task.</p>
        <div className="landing-grid">
          {tools.map(tool => (
            <div key={tool.id} className="tool-card" onClick={() => onNavigate(tool.id)}>
              <div className="tool-card-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
