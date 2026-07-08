import React, { useState } from 'react'

export default function OCRSection() {
  const [uploaded, setUploaded] = useState(false)
  const [extracting, setExtracting] = useState(false)

  const handleDropzoneClick = () => {
    setUploaded(true)
  }

  const handleExtract = () => {
    if (!uploaded) {
      alert('Please select a file to upload first.')
      return
    }
    setExtracting(true)
    setTimeout(() => {
      setExtracting(false)
      alert('Text successfully extracted! You can find it in Shared Files.')
    }, 1500)
  }

  return (
    <div className="workspace-section">
      <div className="workspace-header">
        <h1>OCR Text Extraction</h1>
        <p>Extract machine-readable text from scanned PDFs and Images.</p>
      </div>
      <div className="card">
        <div
          className={`dropzone ${uploaded ? 'uploaded' : ''}`}
          onClick={handleDropzoneClick}
        >
          {uploaded ? (
            <>
              <div style={{ fontSize: 40, marginBottom: 10 }}>✅</div>
              <h3>Document_Scanned.pdf</h3>
              <p style={{ marginTop: 10, fontSize: 14 }}>Ready for extraction</p>
            </>
          ) : (
            <>
              <div style={{ fontSize: 40, marginBottom: 10 }}>📄</div>
              <h3>Drag & Drop your Image or PDF here</h3>
              <p style={{ marginTop: 10, fontSize: 14 }}>or click to browse files</p>
            </>
          )}
        </div>
        <div style={{ marginTop: 20, textAlign: 'right' }}>
          <button className="btn-primary" onClick={handleExtract} disabled={extracting}>
            {extracting ? 'Extracting...' : 'Extract Text'}
          </button>
        </div>
      </div>
    </div>
  )
}
