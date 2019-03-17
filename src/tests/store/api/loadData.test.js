import { loadExampleComments } from '../../../store/api/loadData'
import { API_CALL } from '../../../configs/api'
import * as METHODS from '../../../constants/methods'
import * as API_RESPONSE_NAMES from '../../../constants/apiResponseNames'
import Url from '../../../utils/url'
import * as API_ENDPOINTS from '../../../configs/apiEndpoints'
import * as LOAD_ACTIONS from '../../../constants/actions/loadActionTypes'

describe('Store api - load data', () => {
  test('should return properly prepared payload from store api', () => {
    const expectedActionPayload = {
      type: API_CALL,
      data: {
        method: METHODS.GET,
        propertyNameToReturn: API_RESPONSE_NAMES.EXAMPLE_COMMENTS,
        endpoint: Url.compose(API_ENDPOINTS.LOAD_EXAMPLE_COMMENTS),
        types: [
          LOAD_ACTIONS.LOAD_REQUEST,
          LOAD_ACTIONS.LOAD_SUCCESS,
          LOAD_ACTIONS.LOAD_FAILURE
        ]
      }
    }

    const receivedActionPayload = loadExampleComments()

    expect(receivedActionPayload).toEqual(expectedActionPayload)
  })
})
