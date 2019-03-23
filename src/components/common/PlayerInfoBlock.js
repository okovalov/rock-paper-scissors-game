import React from 'react'
import PropTypes from 'prop-types'

PlayerInfoBlock.propTypes = {
  gameContext: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired,
  order: PropTypes.string.isRequired
}

export default function PlayerInfoBlock({ order, gameContext, gameInfo }) {

  return (
    <div className="tile is-child  notification is-info">
      <p className="title is-uppercase">{gameInfo.players[order].type} Score</p>
      <p className=" has-text-weight-bold is-italic has-text-warning is-size-3 is-size-3-tablet">
        { gameInfo.players[order].scores }
      </p>
    </div>
  )
}
