import { useState } from 'react'
import './Login.css'

interface LoginProps {
  onLogin: (email: string) => void
}

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    onLogin(email.toLowerCase().trim())
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-container">
          {/* <img src={`${import.meta.env.BASE_URL}vyoma-logo.png`} alt="Vyoma" className="login-logo" /> */}
          <img src={`${import.meta.env.BASE_URL}Vyoma_Logo_Blue.png`} alt="Vyoma" className="login-logo" />
        </div>
        <h1 className="devanagari">प्रश्नोत्तरी</h1>
        <p className="login-subtitle">Test your knowledge with our interactive प्रश्नोत्तरी</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              placeholder="Enter your email"
              autoFocus
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          
          <button type="submit" className="login-button">
            Start Quiz
          </button>
        </form>
        
        <p className="login-note">No password required. Just enter your email to begin your प्रश्नोत्तरी journey.</p>
      </div>
    </div>
  )
}

export default Login

