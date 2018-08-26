import * as React from 'react'
//import './HangmanDraw.css';


export default class HangmanNewGame extends React.PureComponent {


  render(){
    return (
      <div className="">
        <button onClick={this.props.newGame}>New Game</button>
      </div>
    )
  }
}
