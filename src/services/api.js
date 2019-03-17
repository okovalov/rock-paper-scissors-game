import axios from 'axios'
import { API_ROOT } from '../configs/api'

const Api = axios.create({
  baseURL: API_ROOT,
  headers: { 'Content-Type': 'application/json' }
})

Api.interceptors.request.use(
  function(config) {
    /** For the future authentication routine **/
    const token = localStorage.getItem('user')

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

Api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default Api
