import * as LOAD_ACTIONS from '../../constants/actions/loadActionTypes'
import * as API_RESPONSE_NAMES from '../../constants/apiResponseNames'
import initialState from '../initialStates/exampleComments'

const exampleComments = (state = initialState, action) => {
  if (!action || !action.hasOwnProperty('type')) {
    return state
  }

  switch (action.type) {
    case LOAD_ACTIONS.LOAD_SUCCESS:
      if (
        !action.data.hasOwnProperty(API_RESPONSE_NAMES.EXAMPLE_COMMENTS) ||
        !action.data[API_RESPONSE_NAMES.EXAMPLE_COMMENTS].length
      ) {
        return state
      }

      return action.data[API_RESPONSE_NAMES.EXAMPLE_COMMENTS]
    case LOAD_ACTIONS.LOAD_REQUEST:
      return state

    case LOAD_ACTIONS.LOAD_FAILURE:
      return state

    default:
      return state
  }
}

export default exampleComments
