import * as React from 'react'
import HangmanWord from './HangmanWord'
import HangmanGuess from './HangmanGuess'
import { randomWord, showGuess, wrongGuessCount, gameFinished, isWinner, wrongGuessLimit } from '../lib/game'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'


class HangmanContainer extends React.PureComponent {
    
    componentDidMount(){
      this.props.newGame(randomWord())
    }
    
    render(){
      if (!this.props.word) return 'Loading...'
      if(gameFinished(this.props.word, this.props.letters)) {
        if(wrongGuessLimit(this.props.word, this.props.letters)) {
          return(
            <div>
              <HangmanWord               
                word={showGuess(this.props.word, this.props.letters)}
                letter={wrongGuessCount(this.props.word, this.props.letters)}
                gameFinished={'YOU LOOSE'}>
              </HangmanWord>
            </div>        
          )
        }
        if(isWinner(this.props.word, this.props.letters)){
          return(
            <div>
              <HangmanWord               
                word={showGuess(this.props.word, this.props.letters)}
                letter={wrongGuessCount(this.props.word, this.props.letters)}
                gameFinished={'YOU WON'}>
              </HangmanWord>
            </div>        
          )
        }
      }
      return(
        <div>      
          <HangmanWord               
            word={showGuess(this.props.word, this.props.letters)}
            letter={wrongGuessCount(this.props.word, this.props.letters)}>
          </HangmanWord>
          <HangmanGuess letter={this.props.letters} makeGuess={this.props.makeGuess}></HangmanGuess>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  word: state.word,
  letters: state.letters
})

export default  connect(mapStateToProps, { newGame, makeGuess })(HangmanContainer) 