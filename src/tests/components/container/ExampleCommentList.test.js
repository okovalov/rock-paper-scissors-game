import React from 'react'
import { shallow } from 'enzyme'
import ExampleCommentsList from '../../../components/container/ExampleCommentsList'
import data from '../../fixtures/exampleComments'

describe('ExampleCommentsList', () => {
  test('should render with comments', () => {
    const wrapper = shallow(<ExampleCommentsList data={data} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should render with empty message', () => {
    const wrapper = shallow(<ExampleCommentsList data={[]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
