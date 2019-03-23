import React, { useState, useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectPlayers from './SelectPlayers'
import CurrentGame from './CurrentGame'
import AiEngine from './AiEngine'

Game.propTypes = {
  gameContext: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired
}

export default function Game({ gameContext, gameInfo }) {
  const dispatch = useContext(gameContext)

  const [_AI] = useState(() => new AiEngine())

  return (
    <Fragment>
      <gameContext.Provider value={dispatch}>
        {!gameInfo.game.isStarted && (
          <SelectPlayers gameContext={gameContext} gameInfo={gameInfo} />
        )}
        {gameInfo.game.isStarted && (
          <CurrentGame gameContext={gameContext} gameInfo={gameInfo} ai={_AI} />
        )}
      </gameContext.Provider>
    </Fragment>
  )
}
