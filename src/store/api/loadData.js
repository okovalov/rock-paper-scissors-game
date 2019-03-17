import * as LOAD_ACTIONS from '../../constants/actions/loadActionTypes'
import * as API_RESPONSE_NAMES from '../../constants/apiResponseNames'
import * as METHODS from '../../constants/methods'
import * as API_ENDPOINTS from '../../configs/apiEndpoints'

import { API_CALL } from '../../configs/api'
import Url from '../../utils/url'

export const loadExampleComments = (data, m) => ({
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
})
