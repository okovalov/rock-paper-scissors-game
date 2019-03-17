import { loadExampleComments } from '../../../store/actions/exampleCommentActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { API_CALL } from '../../../configs/api'
import * as METHODS from '../../../constants/methods'
import * as API_RESPONSE_NAMES from '../../../constants/apiResponseNames'
import Url from '../../../utils/url'
import * as API_ENDPOINTS from '../../../configs/apiEndpoints'
import * as LOAD_ACTIONS from '../../../constants/actions/loadActionTypes'

let store

beforeEach(() => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  store = mockStore({ todos: [] })
})

describe('Store actions - example comments', () => {
  test('should return a proper action from store api', () => {
    const data = { foo: 'bar' }

    const expectedActions = [
      {
        type: API_CALL,
        data: {
          method: METHODS.GET,
          propertyNameToReturn: API_RESPONSE_NAMES.EXAMPLE_COMMENTS,
          endpoint: Url.compose(
            API_ENDPOINTS.LOAD_EXAMPLE_COMMENTS,
            data
          ),
          types: [
            LOAD_ACTIONS.LOAD_REQUEST,
            LOAD_ACTIONS.LOAD_SUCCESS,
            LOAD_ACTIONS.LOAD_FAILURE
          ]
        }
      }
    ]

    return store.dispatch(loadExampleComments(data)).then(() => {
      const actions = store.getActions()
      expect(actions).toEqual(expectedActions)
    })
  })
})
