import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../../../components/presentation/layout/Main'

describe('Main layout', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper).toMatchSnapshot()
  })
})
