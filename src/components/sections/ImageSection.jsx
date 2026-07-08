import React, { useState } from 'react'

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

export default function ImageSection() {
  const [prompt, setPrompt] = useState('')
  const [generating, setGenerating] = useState(false)
  const [results, setResults] = useState(null)

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt first.')
      return
    }
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
      const newResults = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        label: `Generated Image ${i + 1}`,
      }))
      setResults(newResults)
    }, 1500)
  }

  return (
    <div className="workspace-section">
      <div className="workspace-header">
        <h1>Image Generation</h1>
        <p>Generate high-quality images using our AI microservice.</p>
      </div>
      <div className="card">
        <textarea
          className="prompt-input"
          placeholder="Describe the image you want to generate... (e.g., A futuristic city at sunset, cyberpunk style)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="btn-primary" onClick={handleGenerate} disabled={generating}>
          {generating ? 'Generating...' : 'Generate Image'}
        </button>
      </div>
      {results && (
        <div className="results-grid">
          {results.map(r => (
            <div key={r.id} className="result-item filled" style={{ backgroundColor: r.color }}>
              {r.label}
            </div>
          ))}
        </div>
      )}
      {!results && (
        <div className="results-grid">
          <div className="result-item">Image Result 1</div>
          <div className="result-item">Image Result 2</div>
          <div className="result-item">Image Result 3</div>
          <div className="result-item">Image Result 4</div>
        </div>
      )}
    </div>
  )
}
