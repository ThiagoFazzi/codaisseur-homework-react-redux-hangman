import * as React from 'react'

export default class HangmanGuess extends React.PureComponent {


  handleNewGuess = (event) => {
    const btn = event.target
    btn.setAttribute('disabled', true)
    this.props.makeGuess(event.target.value)
  }


  render(){
    return (
      <div>
        <button key={'a'} value={'a'} onClick={this.handleNewGuess}>a</button>
        <button key={'b'} value={'b'} onClick={this.handleNewGuess}>b</button>
        <button key={'c'} value={'c'} onClick={this.handleNewGuess}>c</button>
        <button key={'d'} value={'d'} onClick={this.handleNewGuess}>d</button>
        <button key={'e'} value={'e'} onClick={this.handleNewGuess}>e</button>
        <button key={'f'} value={'f'} onClick={this.handleNewGuess}>f</button>
        <button key={'g'} value={'g'} onClick={this.handleNewGuess}>g</button>
        <button key={'h'} value={'h'} onClick={this.handleNewGuess}>h</button>
        <button key={'i'} value={'i'} onClick={this.handleNewGuess}>i</button>
        <button key={'j'} value={'j'} onClick={this.handleNewGuess}>j</button>
        <button key={'k'} value={'k'} onClick={this.handleNewGuess}>k</button>
        <button key={'l'} value={'l'} onClick={this.handleNewGuess}>l</button>
        <button key={'m'} value={'m'} onClick={this.handleNewGuess}>m</button>
        <button key={'n'} value={'n'} onClick={this.handleNewGuess}>n</button>
        <button key={'o'} value={'o'} onClick={this.handleNewGuess}>o</button>
        <button key={'p'} value={'p'} onClick={this.handleNewGuess}>p</button>
        <button key={'q'} value={'q'} onClick={this.handleNewGuess}>q</button>
        <button key={'r'} value={'r'} onClick={this.handleNewGuess}>r</button>
        <button key={'s'} value={'s'} onClick={this.handleNewGuess}>s</button>
        <button key={'t'} value={'t'} onClick={this.handleNewGuess}>t</button>
        <button key={'u'} value={'u'} onClick={this.handleNewGuess}>u</button>
        <button key={'v'} value={'v'} onClick={this.handleNewGuess}>v</button>
        <button key={'w'} value={'w'} onClick={this.handleNewGuess}>w</button>
        <button key={'x'} value={'x'} onClick={this.handleNewGuess}>x</button>
        <button key={'y'} value={'y'} onClick={this.handleNewGuess}>y</button>
        <button key={'z'} value={'z'} onClick={this.handleNewGuess}>z</button>
        <p>{this.props.letter}</p>
      </div>
    )
  }
}