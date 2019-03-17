import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import apiMiddleware from './middleware/api'

const configureStore = (history, initialState = {}) => {
  const middleware = [thunk, apiMiddleware, routerMiddleware(history)]

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export default configureStore
