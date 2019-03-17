import apiMiddleware from '../../../store/middleware/api'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { API_CALL } from '../../../configs/api'
import * as METHODS from '../../../constants/methods'
import * as API_RESPONSE_NAMES from '../../../constants/apiResponseNames'
import Url from '../../../utils/url'
import * as API_ENDPOINTS from '../../../configs/apiEndpoints'
import * as LOAD_ACTIONS from '../../../constants/actions/loadActionTypes'
import execRequest from '../../../services/request'

jest.mock('../../../services/request')

let next, store

const dataToReturn = [{ a: 1 }, { b: 2 }]

const properAction = {
  type: API_CALL,
  data: {
    method: METHODS.GET,
    propertyNameToReturn: API_RESPONSE_NAMES.EXAMPLE_COMMENTS,
    endpoint: Url.compose(
      API_ENDPOINTS.LOAD_EXAMPLE_COMMENTS,
      {}
    ),
    types: [
      LOAD_ACTIONS.LOAD_REQUEST,
      LOAD_ACTIONS.LOAD_SUCCESS,
      LOAD_ACTIONS.LOAD_FAILURE
    ]
  }
}

beforeEach(() => {
  const middlewares = [thunk, apiMiddleware]
  const mockStore = configureMockStore(middlewares)
  store = mockStore({ exampleComments: dataToReturn })
  store.dispatch = jest.fn()
  next = jest.fn()
})

describe('Store middleware - api', () => {
  test('should NOT dispatch anything and return next for different action type', async () => {
    const action = { type: 'YOUR_ACTION_TYPE', payload: { your: 'data' } }

    apiMiddleware(store)(next)(action)

    expect(store.dispatch.mock.calls.length).toBe(0)
    expect(next.mock.calls.length).toBe(1)
  })

  test('should NOT dispatch anything and return next for undefined action', async () => {
    const action = undefined

    apiMiddleware(store)(next)(action)

    expect(store.dispatch.mock.calls.length).toBe(0)
    expect(next.mock.calls.length).toBe(1)
  })

  test('should send LOAD_REQUEST action', async () => {
    await apiMiddleware(store)(next)(properAction)

    expect(next.mock.calls.length).toBe(2)

    let result = next.mock.calls[0][0]
    expect(result.type).toEqual(LOAD_ACTIONS.LOAD_REQUEST)
  })

  test('should send LOAD_SUCCESS action with data in the response', async () => {
    execRequest.mockImplementation(() => {
      return {
        data: dataToReturn
      }
    })

    const responseData = await apiMiddleware(store)(next)(properAction)

    expect(responseData[API_RESPONSE_NAMES.EXAMPLE_COMMENTS].data).toEqual(
      dataToReturn
    )
    expect(next.mock.calls.length).toBe(2)

    let result = next.mock.calls[1][0]
    expect(result.type).toEqual(LOAD_ACTIONS.LOAD_SUCCESS)
  })

  test('should send LOAD_FAILURE action with undefined data injected in the response from the request', async () => {
    execRequest.mockImplementation(() => {
      return undefined
    })

    await apiMiddleware(store)(next)(properAction)

    expect(next.mock.calls.length).toBe(2)

    let result = next.mock.calls[1][0]
    expect(result.type).toEqual(LOAD_ACTIONS.LOAD_FAILURE)
  })

  test('should send LOAD_FAILURE action with undefined data in the response from the request', async () => {
    await apiMiddleware(store)(next)(properAction)

    expect(next.mock.calls.length).toBe(2)

    let result = next.mock.calls[1][0]
    expect(result.type).toEqual(LOAD_ACTIONS.LOAD_FAILURE)
  })

  test('should send LOAD_FAILURE action if error is caught', async () => {
    execRequest.mockImplementation(() => {
      throw Error('damn it')
    })

    await apiMiddleware(store)(next)(properAction)

    expect(next.mock.calls.length).toBe(2)

    let result = next.mock.calls[1][0]
    expect(result.type).toEqual(LOAD_ACTIONS.LOAD_FAILURE)
  })
})
