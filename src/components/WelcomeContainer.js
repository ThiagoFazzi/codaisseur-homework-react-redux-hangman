import * as React from 'react'
import WelcomeDisplay from './WelcomeDisplay'

class WelcomeContainer extends React.PureComponent {
    
    componentDidMount(){

    }

    render(){
        return(
          <div>
            <h1>WelcomeContainer</h1>
            <WelcomeDisplay></WelcomeDisplay>
          </div>
        )
    }
}

export default  WelcomeContainer 