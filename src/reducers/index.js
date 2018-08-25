import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = [], action = {}) => {
    switch(action.type){
        case NEW_GAME:
            return { 
                ...state,
                ...action.payload
            }
        case MAKE_GUESS:
            console.log(state)
            console.log(action.payload)

            return { 
                ...state,  
                letters: [action.payload]    
            }
        default:
            return state
    }
}