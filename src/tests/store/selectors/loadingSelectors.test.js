import { getLoading } from '../../../store/selectors/loadingSelectors'
import loading from '../../fixtures/loading'

describe('Loading selectors', () => {
  test('should select loading from state', () => {
    const state = { loading }
    expect(getLoading(state)).toBe(loading)
  })
})
