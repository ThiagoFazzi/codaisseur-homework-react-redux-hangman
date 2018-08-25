import * as React from 'react'
import HangmanGame from './HangmanGame'

class HangmanContainer extends React.PureComponent {
    
    componentDidMount(){

    }

    render(){
        return(
          <div>
            <HangmanGame></HangmanGame>
          </div>
        )
    }
}

export default  HangmanContainer 