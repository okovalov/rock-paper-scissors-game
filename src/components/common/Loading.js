import React from 'react'

const Loading = () => (
  <div className="box">
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className="inner">
          <div className="gap" />
          <div className="left">
            <div className="half-circle" />
          </div>
          <div className="right">
            <div className="half-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Loading
