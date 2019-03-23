import { STRATEGIES } from '../../constants/game'

const historyInitialState = [
  { id: 0, first: '-', second: '-', winner: 0, winnerType: '-' }
]

const gameInitialState = {
  moves: {
    first: [],
    second: [],
    winners: [],
    current: 1,
    selected: 0
  },
  history: [...historyInitialState],
  players: {
    first: {
      type: 'ai',
      scores: 0
    },
    second: {
      type: 'human',
      scores: 0
    }
  },
  game: {
    isStarted: false
  },
  strategy: STRATEGIES.CLASSIC
}

export {
  gameInitialState,
  historyInitialState
}