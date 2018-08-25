import * as React from 'react'
import HangmanWord from './HangmanWord'
import HangmanGuess from './HangmanGuess'
import { randomWord, showGuess } from '../lib/game'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'


class HangmanContainer extends React.PureComponent {
    
    componentDidMount(){
      this.props.newGame(randomWord())
    }

    render(){
      if (!this.props.word) return 'Loading...'
        return(
          <div>         
            <HangmanWord               
              word={showGuess(this.props.word, [this.props.letter])}>
            </HangmanWord>
            <HangmanGuess letter={this.props.letter} makeGuess={this.props.makeGuess}></HangmanGuess>
          </div>
        )
    }
}


const mapStateToProps = (state) => ({
  word: state.word,
  letter: state.letter
})

export default  connect(mapStateToProps, { newGame, makeGuess })(HangmanContainer) 