import ApiService from './api'
import * as Methods from '../constants/methods'

const execRequest = async (method, endpoint, body = null) => {
  const requests = {
    [Methods.GET]: ApiService.get,
    [Methods.POST]: ApiService.post
  }

  try {
    const res = await requests[method](endpoint, body)

    // Just an imitation of a slow load, to check spinner if that is needed
    //
    // const somePromise = new Promise(r => setTimeout(r, 3000))
    // const cancelable = getCancelable(somePromise)
    //
    // return cancelable
    //   .promise.then(() => {
    //     console.log('done')
    //     return res.data
    //   }
    // )

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default execRequest
