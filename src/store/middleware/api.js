import { API_CALL } from '../../configs/api'
import execRequest from '../../services/request'

/** Middleware function **/
const apiMiddleware = store => next => async action => {
  /** Simple action, just forward **/
  if (!action || !action.type || action.type !== API_CALL) {
    return next(action)
  }

  /** API call  **/
  const apiCallData = action.data

  const { method, endpoint, types, body, propertyNameToReturn } = apiCallData
  const [requestType, successType, errorType] = types

  /** Request action **/
  next({
    type: requestType
  })

  try {
    const responseData = await execRequest(method, endpoint, body)

    const data = {}

    if (!responseData) {
      /** Failure action **/
      next({
        type: errorType,
        responseData
      })

      return responseData
    }

    data[propertyNameToReturn] = responseData

    /** Success action **/
    next({
      type: successType,
      data
    })

    return { ...data }
  } catch (error) {
    /** Failure action **/
    next({
      type: errorType,
      error
    })

    return { error: { ...error } }
  }
}

export default apiMiddleware
