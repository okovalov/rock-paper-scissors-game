import Api from '../../services/api'
import * as Methods from '../../constants/methods'
import mockAxios from 'axios'

const dataToReturn = [{ a: 1 }, { b: 2 }]

describe('API service', () => {
  test('calls `axios()` with `endpoint`, `method` and `body`', async () => {
    mockAxios.get.mockImplementationOnce(async () =>
      Promise.resolve(dataToReturn)
    )

    const dada = await Api.get(Methods.GET, 'comments', {})

    expect(dada).toEqual(dataToReturn)
  })
})
