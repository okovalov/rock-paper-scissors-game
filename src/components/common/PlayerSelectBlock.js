import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { PLAYER_TYPES } from '../../constants/game'

PlayerSelectBlock.propTypes = {
  gameContext: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired,
  order: PropTypes.string.isRequired
}

export default function PlayerSelectBlock({ gameContext, gameInfo, order }) {
  const dispatch = useContext(gameContext)

  const handleChange = prop => {
    const data = prop.currentTarget.value.split('_')
    const type = ['SET', data[0].toUpperCase(), 'PLAYER', 'TYPE'].join('_');

    dispatch({ type, value: data[1] })
  }

  return (
    <Fragment>
      <p className="title">
        { order.substring(0, 1).toUpperCase() + order.substring(1) } Player</p>
      <ul className="is-size-5">
        <li>
          <input type="radio"
            onChange={handleChange} checked={gameInfo.players[order].type === PLAYER_TYPES.AI}
            name={`${order}Player`} value={`${order}_${PLAYER_TYPES.AI}`}  />
            &nbsp;AI
        </li>
        <li>
          <input type="radio"
            onChange={handleChange} checked={gameInfo.players[order].type === PLAYER_TYPES.HUMAN}
            name={`${order}Player`} value={`${order}_${PLAYER_TYPES.HUMAN}`} />
            &nbsp;Human
        </li>
      </ul>
    </Fragment>
  )
}
