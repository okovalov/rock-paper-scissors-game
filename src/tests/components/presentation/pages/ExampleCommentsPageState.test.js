import React from 'react'

// it has to be here, even though it is not used - it is required for mapping the connect HOC
import ExampleCommentsPageContainer from '../../../../components/presentation/pages/ExampleCommentsPage'

jest.mock('react-redux', () => {
  return {
    connect: jest.fn().mockReturnValue(() => jest.fn())
  }
})

describe('ExampleCommentsPage container', () => {
  describe('mapping of props (state)', () => {
    let mapStateToProps

    beforeEach(() => {
      let mockConnect = require('react-redux').connect

      mapStateToProps = mockConnect.mock.calls[0][0]
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    test('should map loading from state to props', () => {
      const mockState = { loading: false, exampleComments: [{}, {}] }
      let props = mapStateToProps(mockState)

      expect(props.loading).toEqual(false)
    })
  })
})
