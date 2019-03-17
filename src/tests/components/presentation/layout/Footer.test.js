import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../../../components/presentation/layout/Footer'

describe('Footer', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
