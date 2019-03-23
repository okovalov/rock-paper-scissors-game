import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ExampleCommentsPageContainer from '../../../../components/presentation/pages/ExampleCommentsPage'

const comments = [
  { id: 1, name: 'John', email: 'john@boo.com', body: 'yours' },
  { id: 2, name: 'John', email: 'john@boo.com', body: 'yours' },
  { id: 3, name: 'John', email: 'john@boo.com', body: 'yours' }
]

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({
  getState: jest.fn(() => ({
    loading: false,
    exampleComments: comments
  })),
  dispatch: jest.fn()
})

describe('ExampleCommentsPage container', () => {
  test('render wrapped into provider with mocked store', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ExampleCommentsPageContainer />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
