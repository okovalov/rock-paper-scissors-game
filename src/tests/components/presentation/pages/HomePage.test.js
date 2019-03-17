import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '../../../../components/presentation/pages/HomePage'

describe('HomePage', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  })
})
