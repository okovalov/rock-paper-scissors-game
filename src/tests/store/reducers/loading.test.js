import reducer from '../../../store/reducers/loading'
import initialState from '../../../store/initialStates/loading'
import * as LOAD_ACTIONS from '../../../constants/actions/loadActionTypes'
import fixture from '../../fixtures/loading'

describe('Loading reducer', () => {
  test('should set default state with undefined initial state', () => {
    const state = reducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState)
  })

  test('should turn on loading with undefined action', () => {
    const state = reducer(initialState, undefined)
    expect(state).toEqual(initialState)
  })

  test('should turn on loading mode when request is sent', () => {
    const action = {
      type: LOAD_ACTIONS.LOAD_REQUEST
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(fixture.TRUE)
  })

  test('should turn off loading mode when request is failed', () => {
    const action = {
      type: LOAD_ACTIONS.LOAD_FAILURE
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(fixture.FALSE)
  })

  test('should turn off loading mode when request is successful', () => {
    const action = {
      type: LOAD_ACTIONS.LOAD_SUCCESS
    }

    const state = reducer(initialState, action)
    expect(state).toEqual(fixture.FALSE)
  })
})
