import React from 'react'
import { shallow } from 'enzyme'
import ExampleComment from '../../../components/container/ExampleComment'
import data from '../../fixtures/exampleComments'

describe('ExampleComment', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExampleComment data={data[0]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
