import * as ACTIONS from '../../constants/actions/gamePageActionTypes'
import { gameInitialState, historyInitialState } from '../initialStates/game'

const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_STRATEGY: {
      return { ...state, strategy: action.strategy }
    }
    case ACTIONS.GAME_STARTED: {
      return { ...state, history: [...historyInitialState], game: { isStarted: true }}
    }
    case ACTIONS.GAME_STOPPED: {
      return { ...gameInitialState }
    }
    case ACTIONS.GAME_LOADED: {
      return { ...gameInitialState, ...action.savedGameInfo }
    }
    case ACTIONS.SET_CURRENT_MOVE: {
      return { ...state, moves: { ...state.moves, current: action.value }  }
    }
    case ACTIONS.SET_FIRST_PLAYER_TYPE: {
      return { ...state, players: { ...state.players, first: { type: action.value, scores: 0 } } }
    }
    case ACTIONS.SET_SECOND_PLAYER_TYPE: {
      return { ...state, players: { ...state.players, second: { type: action.value, scores: 0 } } }
    }
    case ACTIONS.NEXT_MOVE: {
      return { ...state, moves: { ...state.moves, current: state.moves.current + 1 } }
    }
    case ACTIONS.INCREASE_FIRST_PLAYER_SCORE: {
      return { ...state, players: { ...state.players, first: { ...state.players.first, scores: state.players.first.scores + 1 } } }
    }
    case ACTIONS.INCREASE_SECOND_PLAYER_SCORE: {
      return { ...state, players: { ...state.players, second: { ...state.players.second, scores: state.players.second.scores + 1 } } }
    }
    case ACTIONS.ADD_HISTORY_ITEM: {
      return { ...state, history: [...state.history, action.historyItem] }
    }

    default: return state
  }
}

export default gameReducer