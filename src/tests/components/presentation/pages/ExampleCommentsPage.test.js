import React from 'react'
import { shallow } from 'enzyme'
import { ExampleCommentsPage } from '../../../../components/presentation/pages/ExampleCommentsPage'

describe('should render ExampleCommentsPage', () => {
  const comments = [
    { id: 1, name: 'John', email: 'john@boo.com', body: 'yours' },
    { id: 1, name: 'John', email: 'john@boo.com', body: 'yours' },
    { id: 1, name: 'John', email: 'john@boo.com', body: 'yours' }
  ]

  const defaultData = {
    currentItems: [],
    totalRecords: null,
    currentPage: 1,
    pageLimit: 2
  }

  test('no data given as props', () => {
    const wrapper = shallow(
      <ExampleCommentsPage paginationData={defaultData} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('with given comments and fake action to return comments', () => {
    const wrapper = shallow(
      <ExampleCommentsPage
        exampleComments={comments}
        paginationData={defaultData}
        loadExampleComments={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('with an error in data from loadExampleComments', () => {
    const myMock = jest.fn()

    const myPromise = new Promise(resolve => {
      resolve({ data: { error: 'error!' } })
    })

    myMock.mockReturnValue(myPromise)

    const wrapper = shallow(
      <ExampleCommentsPage
        exampleComments={[]}
        paginationData={defaultData}
        loadExampleComments={myMock}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('with an error thrown when calling loadExampleComments', () => {
    const myMock = jest.fn()

    const myPromise = new Promise((resolve, reject) => {
      reject('rejected')
    })

    myMock.mockReturnValue(myPromise)

    const wrapper = shallow(
      <ExampleCommentsPage
        exampleComments={[]}
        paginationData={defaultData}
        loadExampleComments={myMock}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('with given empty list', () => {
    const wrapper = shallow(
      <ExampleCommentsPage
        exampleComments={[]}
        paginationData={defaultData}
        loadExampleComments={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
