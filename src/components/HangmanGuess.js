import * as React from 'react'

export default class HangmanGuess extends React.PureComponent {


  handleNewGuess = (event) => {
    this.props.makeGuess(event.target.value)
  }


  render(){
    return (
      <div>
        <button value={'a'} onClick={this.handleNewGuess}>a</button>
        <button value={'b'} onClick={this.handleNewGuess}>b</button>
        <button value={'c'} onClick={this.handleNewGuess}>c</button>
        <button value={'d'} onClick={this.handleNewGuess}>d</button>
        <button value={'e'} onClick={this.handleNewGuess}>e</button>
        <button value={'f'} onClick={this.handleNewGuess}>f</button>
        <button value={'g'} onClick={this.handleNewGuess}>g</button>
        <button value={'h'} onClick={this.handleNewGuess}>h</button>
        <button value={'i'} onClick={this.handleNewGuess}>i</button>
        <button value={'j'} onClick={this.handleNewGuess}>j</button>
        <button value={'k'} onClick={this.handleNewGuess}>k</button>
        <button value={'l'} onClick={this.handleNewGuess}>l</button>
        <button value={'m'} onClick={this.handleNewGuess}>m</button>
        <button value={'n'} onClick={this.handleNewGuess}>n</button>
        <button value={'o'} onClick={this.handleNewGuess}>o</button>
        <button value={'p'} onClick={this.handleNewGuess}>p</button>
        <button value={'q'} onClick={this.handleNewGuess}>q</button>
        <button value={'r'} onClick={this.handleNewGuess}>r</button>
        <button value={'s'} onClick={this.handleNewGuess}>s</button>
        <button value={'t'} onClick={this.handleNewGuess}>t</button>
        <button value={'u'} onClick={this.handleNewGuess}>u</button>
        <button value={'v'} onClick={this.handleNewGuess}>v</button>
        <button value={'x'} onClick={this.handleNewGuess}>x</button>
        <p>{this.props.letter}</p>
      </div>
    )
  }
}