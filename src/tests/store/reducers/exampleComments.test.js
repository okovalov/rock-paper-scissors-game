import reducer from '../../../store/reducers/exampleComments'
import initialState from '../../../store/initialStates/exampleComments'
import * as LOAD_ACTIONS from '../../../constants/actions/loadActionTypes'
import fixture from '../../fixtures/exampleComments'
import * as API_RESPONSE_NAMES from '../../../constants/apiResponseNames'

describe('exampleComments reducer', () => {
  test('should set default state', () => {
    const state = reducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState)
  })

  test('should turn on loading mode when request is sent and action is empty', () => {
    const state = reducer(initialState, undefined)
    expect(state).toEqual(initialState)
  })

  test('should turn on loading mode when request is sent', () => {
    const action = {
      type: LOAD_ACTIONS.LOAD_REQUEST
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(initialState)
  })

  test('should turn off loading mode when request is failed', () => {
    const action = {
      type: LOAD_ACTIONS.LOAD_FAILURE
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(initialState)
  })

  test('should turn off loading mode when request is successful and there are more than 0 results', () => {
    const data = {}
    data[API_RESPONSE_NAMES.EXAMPLE_COMMENTS] = fixture

    const action = {
      type: LOAD_ACTIONS.LOAD_SUCCESS,
      data
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(fixture)
  })

  test('should turn off loading mode when request is successful and there is no results', () => {
    const data = {}
    data[API_RESPONSE_NAMES.EXAMPLE_COMMENTS] = []

    const action = {
      type: LOAD_ACTIONS.LOAD_SUCCESS,
      data
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(initialState)
  })

  test('should turn off loading mode when request is successful bit no expected property exists in the response', () => {
    const action = {
      type: LOAD_ACTIONS.LOAD_SUCCESS,
      data: {}
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(initialState)
  })
})
