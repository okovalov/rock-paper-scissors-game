import * as ACTIONS from '../../constants/actions/currentPageActionTypes'
import initialState from '../initialStates/currentPage'

const currentPage = (state = initialState, action) => {
  if (!action || !action.hasOwnProperty('type')) {
    return state
  }

  switch (action.type) {
    case ACTIONS.GET_CURRENT_PAGE:
      return state
    case ACTIONS.SET_CURRENT_PAGE:
      return action.page
    default:
      return state
  }
}

export default currentPage
