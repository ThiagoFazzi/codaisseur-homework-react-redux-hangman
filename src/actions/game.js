export const NEW_GAME = 'NEW_GAME'

export function newGame(word) {
    console.log(word)
    return {
      type: NEW_GAME,
      payload: {
          word
        }
    }
}