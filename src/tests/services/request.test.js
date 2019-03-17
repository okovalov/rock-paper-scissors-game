import ApiService from '../../services/api'
import execRequest from '../../services/request'
import * as Methods from '../../constants/methods'

jest.mock('../../services/api')

const dataToReturn = [{ a: 1 }, { b: 2 }]

describe('Request service', () => {
  test('should return data what is returned by api', async () => {
    ApiService.get.mockImplementation(() => ({ data: dataToReturn }))

    const responseData = await execRequest(Methods.GET, 'comments', {})

    expect(responseData).toEqual(dataToReturn)
  })

  test('should return data what is returned by api with no body given to the request', async () => {
    ApiService.get.mockImplementation(() => ({ data: dataToReturn }))

    const responseData = await execRequest(Methods.GET, 'comments')

    expect(responseData).toEqual(dataToReturn)
  })

  test('should catch an error if api returns no data', async () => {
    ApiService.get.mockImplementation(() => {
      return undefined
    })

    await expect(execRequest(Methods.GET, 'comments', {})).rejects.toThrow(
      "Cannot read property 'data' of undefined"
    )
  })
})
