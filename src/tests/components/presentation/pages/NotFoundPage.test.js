import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../../../components/presentation/pages/NotFoundPage'

describe('NotFoundPage', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
