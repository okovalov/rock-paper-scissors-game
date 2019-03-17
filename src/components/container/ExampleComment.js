import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ExampleComment extends Component {
  render() {
    const { data } = this.props

    return (
      <div className="product-card">
        <div className="info">
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.body}</p>
        </div>
      </div>
    )
  }
}

ExampleComment.propTypes = {
  data: PropTypes.object.isRequired
}

export default ExampleComment
