import { getExampleComments } from '../../../store/selectors/exampleCommentSelectors'
import comments from '../../fixtures/exampleComments'

describe('Example comments selectors', () => {
  test('should select example comments from state', () => {
    const state = { exampleComments: comments }
    expect(getExampleComments(state)).toBe(comments)
  })
})
