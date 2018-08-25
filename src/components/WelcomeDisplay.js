import * as React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeDisplay() {
  return (
    <div>
      <h1>Welcome to HangMan game!</h1>
      <Link to={'/hangman'}>Start playing!</Link>
    </div>
  )
}