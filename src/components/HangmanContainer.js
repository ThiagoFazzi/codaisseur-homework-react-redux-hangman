import * as React from 'react'
import HangmanGame from './HangmanGame'
import { randomWord } from '../lib/game'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'


class HangmanContainer extends React.PureComponent {
    
    componentDidMount(){
      this.props.newGame(randomWord())
    }

    render(){
        return(
          <div>
            <HangmanGame></HangmanGame>
          </div>
        )
    }
}

export default  connect(null, { newGame })(HangmanContainer) 