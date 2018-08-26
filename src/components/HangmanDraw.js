import * as React from 'react'
import './HangmanDraw.css';


export default class HangmanDraw extends React.PureComponent {


  render(){
    return (
      <div className="hangman">
        <div  className="hangmanImg">
          <img src={require(`../image/member-${this.props.members}.png`)} prop=""></img>
        </div>
        <div className="hangmanWord">
          <h1>{this.props.word}</h1>
          <h2>Number of wrong guesses: {this.props.wrongLetterCounter}</h2>
          <h2>{this.props.gameFinished}</h2>
      </div>
      </div>
    )
  }
}
