import * as React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeDisplay.css';

export default function WelcomeDisplay() {
  return (
    <div className="welcomeDisplay">
      <h1>Welcome to HangMan game!</h1>
      <Link to={'/hangman'}><div className="btnStartGame"><h2>Start playing!</h2></div></Link>
    </div>
  )
}