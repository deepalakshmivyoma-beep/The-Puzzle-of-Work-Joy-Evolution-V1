import { UserScore, UserAttempts } from '../types'

// Save user score to localStorage
export const saveUserScore = (userEmail: string, scoreData: UserScore): void => {
  try {
    const storageKey = `quiz_scores_${userEmail.replace(/[^a-zA-Z0-9]/g, '_')}`
    
    // Get existing user data
    const existingData = localStorage.getItem(storageKey)
    let userData: UserAttempts = { email: userEmail, attempts: [] }
    
    if (existingData) {
      userData = JSON.parse(existingData)
    }
    
    // Add new score
    userData.attempts.push(scoreData)
    
    // Save to localStorage
    localStorage.setItem(storageKey, JSON.stringify(userData))
  } catch (error) {
    console.error('Error saving user score:', error)
    throw error
  }
}

// Get user scores from localStorage
export const getUserScores = (userEmail: string): UserAttempts => {
  try {
    const storageKey = `quiz_scores_${userEmail.replace(/[^a-zA-Z0-9]/g, '_')}`
    const data = localStorage.getItem(storageKey)
    
    if (!data) {
      return { email: userEmail, attempts: [] }
    }
    
    return JSON.parse(data)
  } catch (error) {
    console.error('Error fetching user scores:', error)
    return { email: userEmail, attempts: [] }
  }
}

