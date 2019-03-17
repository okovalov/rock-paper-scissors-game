import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../../components/presentation/layout/Header'

describe('Header', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
