import * as React from 'react'
import WelcomeDisplay from './WelcomeDisplay'

class WelcomeContainer extends React.PureComponent {
    
    render(){
        return(
          <div>
            <WelcomeDisplay></WelcomeDisplay>
          </div>
        )
    }
}

export default  WelcomeContainer 