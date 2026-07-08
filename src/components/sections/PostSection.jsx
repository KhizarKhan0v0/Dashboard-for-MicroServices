import React, { useState } from 'react'

const PLATFORMS = [
  { id: 'twitter', label: 'Twitter', defaultChecked: true },
  { id: 'linkedin', label: 'LinkedIn', defaultChecked: true },
  { id: 'instagram', label: 'Instagram', defaultChecked: false },
]

export default function PostSection() {
  const [topic, setTopic] = useState('')
  const [checkedPlatforms, setCheckedPlatforms] = useState(
    PLATFORMS.filter(p => p.defaultChecked).map(p => p.id)
  )
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState(null)

  const togglePlatform = (id) => {
    setCheckedPlatforms(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const handleGenerate = () => {
    if (!topic.trim()) {
      alert('Please enter a topic first.')
      return
    }
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
      const selectedLabels = PLATFORMS.filter(p => checkedPlatforms.includes(p.id)).map(p => p.label)
      setResult({ topic, platforms: selectedLabels })
    }, 1500)
  }

  return (
    <div className="workspace-section">
      <div className="workspace-header">
        <h1>Social Post Generation</h1>
        <p>Automatically generate social media posts across all platforms.</p>
      </div>
      <div className="card">
        <input
          type="text"
          className="prompt-input short"
          placeholder="Topic (e.g. 'New feature launch for our app')"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <div className="checkbox-row">
          {PLATFORMS.map(p => (
            <label key={p.id}>
              <input
                type="checkbox"
                checked={checkedPlatforms.includes(p.id)}
                onChange={() => togglePlatform(p.id)}
              />
              {p.label}
            </label>
          ))}
        </div>
        <button className="btn-primary" onClick={handleGenerate} disabled={generating}>
          {generating ? 'Generating...' : 'Generate Posts'}
        </button>

        {result && (
          <div className="generated-post-result">
            <strong>Generated Posts:</strong>
            <br /><br />
            {result.platforms.length > 0 ? (
              result.platforms.map(platform => (
                <div key={platform} className="post-platform">
                  <strong>{platform}:</strong> Excited to announce {result.topic}! 🚀 Our team has been working hard on this. Check it out now! #Launch #Tech
                </div>
              ))
            ) : (
              <em>No platforms selected.</em>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
