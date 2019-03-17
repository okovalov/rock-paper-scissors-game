import React from 'react'

// it has to be here, even though it is not used - it is required for mapping the connect HOC
import ExampleCommentsPageContainer from '../../../../components/presentation/pages/ExampleCommentsPage'

jest.mock('react-redux', () => {
  return {
    connect: jest.fn().mockReturnValue(() => jest.fn())
  }
})

jest.mock('../../../../store/actions/exampleCommentActions', () => {
  return {
    loadExampleComments: jest.fn().mockReturnValue('mock login action')
  }
})

describe('ExampleCommentPage container', () => {
  describe('mapping of props (actions)', () => {
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require('react-redux').connect

      mapDispatchToProps = mockConnect.mock.calls[0][1]
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    test('should map login props to login of LoginActions', () => {
      let mockLoginActions = require('../../../../store/actions/exampleCommentActions')
      let dispatch = jest.fn()

      let props = mapDispatchToProps(dispatch)
      props.loadExampleComments()

      expect(dispatch).toBeCalledWith('mock login action')
      expect(mockLoginActions.loadExampleComments).toBeCalled()
    })
  })
})
