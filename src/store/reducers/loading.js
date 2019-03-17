import * as LOAD_ACTIONS from '../../constants/actions/loadActionTypes'
import initialState from '../initialStates/loading'

const loading = (state = initialState, action) => {
  if (!action || !action.hasOwnProperty('type')) {
    return state
  }

  switch (action.type) {
    case LOAD_ACTIONS.LOAD_REQUEST:
      return true
    case LOAD_ACTIONS.LOAD_SUCCESS:
      return false
    case LOAD_ACTIONS.LOAD_FAILURE:
      return false
    default:
      return state
  }
}

export default loading
