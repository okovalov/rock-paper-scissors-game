import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import loading from './loading'
import exampleComments from './exampleComments'
import currentPage from './currentPage'

const rootReducer = combineReducers({
  routing,
  loading,
  exampleComments,
  currentPage
})

export default rootReducer
