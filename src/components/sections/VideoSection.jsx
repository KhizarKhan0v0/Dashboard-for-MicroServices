import React, { useState } from 'react'

export default function VideoSection() {
  const [initialized, setInitialized] = useState(false)

  const handleInit = () => {
    if (initialized) return
    setInitialized(true)
  }

  return (
    <div className="workspace-section">
      <div className="workspace-header">
        <h1>Video Editing Workspace</h1>
        <p>Cloud-based video timeline editor microservice.</p>
      </div>
      <div className="card" style={{ cursor: initialized ? 'default' : 'pointer', padding: initialized ? 24 : 60, textAlign: initialized ? 'left' : 'center' }} onClick={handleInit}>
        {initialized ? (
          <>
            <div className="video-player-area">
              <span className="play-btn">▶️</span>
            </div>
            <div className="timeline">
              <div className="timeline-segment" style={{ flex: 1, backgroundColor: 'var(--primary)' }}></div>
              <div className="timeline-segment" style={{ flex: 2, backgroundColor: '#10b981' }}></div>
              <div className="timeline-cursor"></div>
              <div className="timeline-segment" style={{ flex: 1.5, backgroundColor: '#f59e0b' }}></div>
            </div>
          </>
        ) : (
          <>
            <span style={{ fontSize: 48 }}>🎬</span>
            <h2 style={{ marginTop: 20 }}>Video timeline and rendering engine</h2>
            <p style={{ marginTop: 10 }}>Drag media from your shared files here.</p>
          </>
        )}
      </div>
    </div>
  )
}
