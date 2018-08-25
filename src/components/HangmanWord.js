import * as React from 'react'

export default class HangmanWord extends React.PureComponent {

  render(){
    return (
      <div>
        <h1>NEW GAME - LETS START</h1>
        <p>{this.props.word}</p>
        <h2>{this.props.letter}</h2>
      </div>
    )
  }
}