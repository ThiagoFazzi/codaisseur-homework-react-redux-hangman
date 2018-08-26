import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = [], action = {}) => {
    switch(action.type){
        case NEW_GAME:
            return { 
                ...action.payload,
                letters: []
            }
        case MAKE_GUESS:
            const stateArray = {...state}
            stateArray.letters = [...stateArray.letters, action.payload.letter]
            return stateArray
        default:
            return state
    }
}