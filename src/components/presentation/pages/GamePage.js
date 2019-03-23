import React, { useState, useReducer, useEffect, Fragment } from 'react'
import Game from '../../common/Game'
import { gameInitialState } from '../../../store/initialStates/game'
import { GAME_LOADED } from '../../../constants/actions/gamePageActionTypes'
import gameReducer from '../../../store/reducers/game'
import Storage from '../../../utils/storage'

const GameContext = React.createContext(null)

export default function GamePage(props) {
  const [gameInfo, dispatch] = useReducer(gameReducer, gameInitialState)

  const [isGameLoaded, changeGameLoadedStatus] = useState(() => false)

  useEffect(() => {
    if (!isGameLoaded) {
      const game = Storage.get('rsp_gameInfo')

      const savedGameInfo = game ? JSON.parse(game) : gameInitialState

      changeGameLoadedStatus(true)
      dispatch({ type: GAME_LOADED, savedGameInfo })
    }
  })

  useEffect(() => {
    Storage.set('rsp_gameInfo', JSON.stringify(gameInfo))
  })

  return (
    <Fragment>
      <section className="section">

        <GameContext.Provider value={dispatch}>
          <Game gameInfo={gameInfo} gameContext={GameContext} />
        </GameContext.Provider>

      </section>
    </Fragment>
  )
}
