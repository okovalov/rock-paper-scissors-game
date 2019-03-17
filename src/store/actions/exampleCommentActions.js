import * as StoreApi from '../api/loadData'

export const loadExampleComments = (data, m) => async dispatch =>
  await dispatch(StoreApi.loadExampleComments(data, m))

// export default loadExampleComments
