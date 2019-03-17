import React from 'react'
import { shallow } from 'enzyme'
import { Pagination } from '../../../components/common/Pagination'

describe('Pagination component', () => {
  test('should render Pagination with pages correctly', () => {
    const onPageChangedSpy = jest.fn()

    const data = {
      totalRecords: 70,
      recordsName: 'Results',
      currentPage: 1,
      pageLimit: 10,
      pageNeighbours: 1
    }

    const {
      totalRecords,
      recordsName,
      currentPage,
      pageLimit,
      pageNeighbours
    } = data

    const wrapper = shallow(
      <Pagination
        totalRecords={totalRecords}
        recordsName={recordsName}
        currentPage={currentPage}
        pageLimit={pageLimit}
        pageNeighbours={pageNeighbours}
        onPageChanged={onPageChangedSpy}
      />
    )
    const mainNav = wrapper.find('.page-main-nav')
    expect(mainNav.length).not.toBe(0)
    expect(wrapper).toMatchSnapshot()
  })

  test('should render empty Pagination', () => {
    const onPageChangedSpy = jest.fn()

    const data = {
      totalRecords: 10,
      recordsName: 'Results',
      currentPage: 1,
      pageLimit: 10,
      pageNeighbours: 1
    }

    const {
      totalRecords,
      recordsName,
      currentPage,
      pageLimit,
      pageNeighbours
    } = data

    const wrapper = shallow(
      <Pagination
        totalRecords={totalRecords}
        recordsName={recordsName}
        currentPage={currentPage}
        pageLimit={pageLimit}
        pageNeighbours={pageNeighbours}
        onPageChanged={onPageChangedSpy}
      />
    )
    const mainNav = wrapper.find('.page-main-nav')
    expect(mainNav.length).toBe(0)
    expect(wrapper).toMatchSnapshot()
  })
})
