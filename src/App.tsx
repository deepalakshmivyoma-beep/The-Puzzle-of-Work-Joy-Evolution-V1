import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Quiz from './components/Quiz'
import Results from './components/Results'
import logoutIcon from './assets/logout.png'
import './App.css'

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    // Check if user is already logged in
    const email = localStorage.getItem('userEmail')
    if (email) {
      setUserEmail(email)
    }
  }, [])

  const handleLogin = (email: string) => {
    setUserEmail(email)
    localStorage.setItem('userEmail', email)
  }

  const handleLogout = () => {
    setUserEmail(null)
    localStorage.removeItem('userEmail')
    localStorage.removeItem('currentQuiz')
    localStorage.removeItem('quizProgress')
  }

  return (
    <Router basename="/vyoma-online-quiz">
      <div className="app">
        {userEmail && (
          <header className="app-header">
            <h1>
              <img src={`${import.meta.env.BASE_URL}vyoma-logo.png`} alt="Vyoma" className="logo" />
              <span className="devanagari">प्रश्नोत्तरी</span>
            </h1>
            <div className="user-info">
              <span>{userEmail}</span>
              <button onClick={handleLogout} className="logout-btn" title="Logout">
                <img src={logoutIcon} alt="Logout" className="logout-icon" />
              </button>
            </div>
          </header>
        )}
        <Routes>
          <Route 
            path="/login" 
            element={userEmail ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/dashboard" 
            element={userEmail ? <Dashboard userEmail={userEmail} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/quiz/:theme" 
            element={userEmail ? <Quiz userEmail={userEmail} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/results" 
            element={userEmail ? <Results userEmail={userEmail} /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to={userEmail ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

