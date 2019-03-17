import React from 'react'
import PropTypes from 'prop-types'
import Locale from '../../utils/locale'
import ExampleComment from './ExampleComment'

const ExampleCommentsList = ({ data }) => (
  <section className="products">
    {(data.length > 0 &&
      data.map(comment => (
        <ExampleComment data={comment} key={comment.id} />
      ))) || <p>{Locale.trans('DATA_EMPTY_LIST')}</p>}
  </section>
)

ExampleCommentsList.propTypes = {
  data: PropTypes.array.isRequired
}

export default ExampleCommentsList
