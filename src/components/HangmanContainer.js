import * as React from 'react'
import HangmanGuess from './HangmanGuess'
import HangmanDraw from './HangmanDraw'
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
              <HangmanDraw               
                members={wrongGuessCount(this.props.word, this.props.letters)}
                word={showGuess(this.props.word, this.props.letters)}
                wrongLetterCounter={wrongGuessCount(this.props.word, this.props.letters)}
                gameFinished={'YOU LOST! Try again...'}>
              </HangmanDraw>
              <HangmanGuess letter={this.props.letters} makeGuess={this.props.makeGuess}></HangmanGuess>
            </div>        
          )
        }
        if(isWinner(this.props.word, this.props.letters)){
          return(
            <div>
              <HangmanDraw               
                members={wrongGuessCount(this.props.word, this.props.letters)}
                word={showGuess(this.props.word, this.props.letters)}
                wrongLetterCounter={wrongGuessCount(this.props.word, this.props.letters)}
                gameFinished={'YOU WON'}>
              </HangmanDraw>
              <HangmanGuess letter={this.props.letters} makeGuess={this.props.makeGuess}></HangmanGuess>
            </div>        
          )
        }
      }
      return(
        <div>
          <HangmanDraw 
            members={wrongGuessCount(this.props.word, this.props.letters)}
            word={showGuess(this.props.word, this.props.letters)}
            wrongLetterCounter={wrongGuessCount(this.props.word, this.props.letters)}>
          </HangmanDraw>     

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