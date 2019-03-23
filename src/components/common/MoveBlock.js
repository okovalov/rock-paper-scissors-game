import React from 'react'
import PropTypes from 'prop-types'
import { PLAYER_TYPES } from '../../constants/game'

MoveBlock.propTypes = {
  moveImage: PropTypes.string.isRequired,
  moveTitle: PropTypes.string.isRequired,
  moveValue: PropTypes.number.isRequired,
  gameInfo: PropTypes.object.isRequired,
  handleThisTurn: PropTypes.func.isRequired,
  ai: PropTypes.object.isRequired
}

export default function MoveBlock({ moveImage, moveValue, moveTitle, gameInfo, ai, handleThisTurn }) {
  const handleClick = prop => {
    const selectedMove = parseInt(prop.currentTarget.value)

    const firstType = gameInfo.players.first.type
    const secondType = gameInfo.players.second.type

    const firstPlayerMove = firstType === PLAYER_TYPES.HUMAN ? selectedMove : ai.getRandomNumber()
    const secondPlayerMove = secondType === PLAYER_TYPES.HUMAN ? selectedMove : ai.getRandomNumber()

    handleThisTurn(firstPlayerMove, secondPlayerMove, { t1: firstType, t2: secondType })
  }

  return (
    <div
      className="tile is-parent notification is-primary is-marginless " >

      <div className={`tile control is-parent is-vertical has-text-centered is-centered ${
        ((gameInfo.players.first.type === gameInfo.players.second.type) && gameInfo.players.first.type === PLAYER_TYPES.AI)
        && ' is-invisible '
      }`} >

        <figure className="image is-2by2 tile is-child is-centered" style={{textAlign: '-webkit-center'}}>
          <img src={`/dist/images/${moveImage}`} style={{ width:'150px'}} />
        </figure>

        <div className="tile is-child" style={{textAlign: '-webkit-center'}}>
          <input
            className="tile is-child is-centered" type="radio"
            onClick={handleClick}
            name="answer" value={moveValue}
            defaultChecked={gameInfo.moves.selected === moveValue}
          />
          <p className="title is-child">{moveTitle}</p>
        </div>
      </div>
    </div>
  )
}
