import * as React from 'react'

export default class HangmanWord extends React.PureComponent {

  render(){
    return (
      <div>
        <h1>NEW GAME - LETS START</h1>
        <p>{this.props.word}</p>
        <h2>{this.props.letter}</h2>
        <h2>{this.props.gameFinished}</h2>
        <h2>{this.props.isWin}</h2>
        <h2>{this.props.isLoose}</h2>
      </div>
    )
  }
}