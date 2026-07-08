import React, { useState } from 'react'

const MODES = ['Summarize', 'Fix Grammar', 'Make Professional']

export default function TextSection() {
  const [activeMode, setActiveMode] = useState(0)
  const [text, setText] = useState('')
  const [processing, setProcessing] = useState(false)

  const handleProcess = () => {
    if (!text.trim()) {
      alert('Please paste some text first.')
      return
    }
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setText('[Processed & Enhanced via AI]\n\n' + text)
    }, 1000)
  }

  return (
    <div className="workspace-section">
      <div className="workspace-header">
        <h1>Text Formatting</h1>
        <p>Format, rewrite, and clean up your copy.</p>
      </div>
      <div className="card">
        <div className="btn-row">
          {MODES.map((mode, i) => (
            <button
              key={mode}
              className={`btn-secondary ${activeMode === i ? 'active' : ''}`}
              onClick={() => setActiveMode(i)}
            >
              {mode}
            </button>
          ))}
        </div>
        <textarea
          className="text-editor"
          placeholder="Paste your raw text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{ marginTop: 15 }}>
          <button className="btn-primary" onClick={handleProcess} disabled={processing}>
            {processing ? 'Processing...' : 'Process Text'}
          </button>
        </div>
      </div>
    </div>
  )
}
