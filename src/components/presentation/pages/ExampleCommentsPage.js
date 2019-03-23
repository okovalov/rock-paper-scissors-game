import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loading from '../../common/Loading'
import ExampleCommentsList from '../../container/ExampleCommentsList'
import { setCurrentPage } from '../../../store/actions/currentPageActions'
import { loadExampleComments } from '../../../store/actions/exampleCommentActions'
import {
  getExampleComments,
  getCommentsPaginationData
} from '../../../store/selectors/exampleCommentSelectors'
import { getLoading } from '../../../store/selectors/loadingSelectors'
import { getCancelable } from '../../../utils/cancelablePromise'
import { Pagination } from '../../common/Pagination'

export class ExampleCommentsPage extends Component {
  state = {
    error: ''
  }

  static propTypes = {
    loading: PropTypes.bool,
    exampleComments: PropTypes.array,
    loadExampleComments: PropTypes.func,
    paginationData: PropTypes.object,
    setCurrentPage: PropTypes.func.isRequired
  }

  static defaultProps = {
    loading: false,
    exampleComments: undefined,
    loadExampleComments: undefined,
    paginationData: undefined
  }

  componentDidMount() {
    const { exampleComments, loadExampleComments } = this.props

    if (exampleComments && !exampleComments.length) {
      const cancelableGetEntity = getCancelable(loadExampleComments())

      cancelableGetEntity.promise
        .then(data => {
          if (!data || data.error) {
            this.setState(() => ({ error: 'Looks like we got an error' }))
            console.log('error', data)
            return
          }

          console.log('we got comments', data)
        })
        .catch(reason => {
          console.log('get comments isCanceled', reason)
        })
    }
  }

  handlePageChanged = data => {
    const { currentPage } = data
    const { setCurrentPage } = this.props
    setCurrentPage(currentPage)
  }

  renderPagination = () => {
    const { paginationData } = this.props

    const {
      currentPage,
      pageLimit,
      totalRecords,
      currentItems
    } = paginationData

    if (!currentItems || currentItems.length < 1) {
      return <div />
    }

    return (
      <Pagination
        totalRecords={totalRecords}
        recordsName=""
        currentPage={currentPage}
        pageLimit={pageLimit}
        pageNeighbours={1}
        onPageChanged={this.handlePageChanged}
      />
    )
  }

  render() {
    const { loading, paginationData } = this.props
    const { error } = this.state
    const { currentItems } = paginationData

    if (loading || !currentItems) {
      return <Loading />
    }

    return (
      <div>
        {error && <p>{error}</p>}
        <ExampleCommentsList data={currentItems} />
        {this.renderPagination()}
      </div>
    )
  }
}


export default connect(
  state => ({
    exampleComments: getExampleComments(state),
    loading: getLoading(state),
    paginationData: getCommentsPaginationData(state)
  }),
  dispatch => ({
    loadExampleComments: () => dispatch(loadExampleComments()),
    setCurrentPage: page => dispatch(setCurrentPage(page))
  })
)(ExampleCommentsPage)
