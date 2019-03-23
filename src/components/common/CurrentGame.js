import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import MoveBlock from './MoveBlock'
import PlayerInfoBlock from './PlayerInfoBlock'
import HistoryInfoBlock from './HistoryInfoBlock'
import { MOVES_MAP, PLAYER_TYPES, FIGURES, RULES, STRATEGIES } from '../../constants/game'
import * as ACTIONS from '../../constants/actions/gamePageActionTypes'

CurrentGame.propTypes = {
  gameContext: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired,
  ai: PropTypes.object.isRequired
}

export default function CurrentGame({ gameContext, gameInfo, ai }) {
  const dispatch = useContext(gameContext)

  const handleReset = () => {
    dispatch({ type: ACTIONS.GAME_STOPPED })
  }

  const handleThisTurn = (firstPlayerMove, secondPlayerMove, { t1, t2 }) => {
    const winner = ai.whoWins(firstPlayerMove, secondPlayerMove, gameInfo.strategy)

    let winnerType = '-'

    if (winner) winnerType = winner === 1 ? t1 : t2

    const historyItem = {
      id: gameInfo.moves.current,
      first: MOVES_MAP[firstPlayerMove],
      second: MOVES_MAP[secondPlayerMove],
      winner,
      winnerType
    }

    if (winner === 1) dispatch({ type: ACTIONS.INCREASE_FIRST_PLAYER_SCORE })
    if (winner === 2) dispatch({ type: ACTIONS.INCREASE_SECOND_PLAYER_SCORE })

    dispatch({ type: ACTIONS.ADD_HISTORY_ITEM, historyItem })
    dispatch({ type: ACTIONS.NEXT_MOVE })
  }

  const handleNextMove = () => {
    const firstPlayerMove = ai.getRandomNumber()
    const secondPlayerMove = ai.getRandomNumber()

    handleThisTurn(firstPlayerMove, secondPlayerMove, { t1: `${PLAYER_TYPES.AI} 1`, t2: `${PLAYER_TYPES.AI} 2` })
  }

  return (
    <Fragment>
      <gameContext.Provider value={dispatch}>
        <div className="container">
          <div className="tile is-ancestor">

            <div className="tile is-vertical is-parent ">

              <div className="tile is-parent ">
                <div className="tile is-child  notification">
                  { RULES[gameInfo.strategy] }&nbsp;<br />
                  Just take your pick! Or, if AI compets against itself, let him do so, and simply
                  <strong> press Next Move</strong>
                </div>
              </div>

              <div className="tile is-parent ">
                <HistoryInfoBlock gameInfo={gameInfo} gameContext={gameContext}  />
              </div>

              <div className="tile is-parent ">

                <div className="tile is-parent  is-vertical ">
                  <div className="tile is-parent ">
                    <PlayerInfoBlock order="first" gameInfo={gameInfo} gameContext={gameContext}  />
                  </div>
                  <div className="tile is-parent ">
                    <PlayerInfoBlock order="second" gameInfo={gameInfo} gameContext={gameContext} />
                  </div>
                </div>

                {
                  FIGURES.map(figure => (
                    <div key={figure.id} className="tile is-parent ">
                      <MoveBlock
                        moveImage={figure.moveImage}
                        moveValue={figure.moveValue} moveTitle={figure.moveTitle}
                        gameContext={gameContext} gameInfo={gameInfo}
                        ai={ai}
                        handleThisTurn={handleThisTurn}
                      />
                    </div>
                  ))
                }
              </div>

              <div className="tile is-parent ">
                <div className={`tile is-parent ${
                  (gameInfo.players.first.type === PLAYER_TYPES.AI && gameInfo.players.second.type === PLAYER_TYPES.AI) ? ' is-4  ' : ''
                }`}>
                  <div className="tile is-child ">
                    <div className="buttons has-addons is-centered">
                      <span
                        onClick={handleReset}
                        className="button is-large is-fullwidth is-success is-uppercase">
                        Start over
                      </span>
                    </div>
                  </div>
                </div>
                {
                  (gameInfo.players.first.type === PLAYER_TYPES.AI && gameInfo.players.second.type === PLAYER_TYPES.AI) && (

                    <div className="tile is-parent">
                      <div className="tile is-child ">
                        <div className="buttons has-addons is-centered">
                          <span
                            onClick={handleNextMove}
                            className="button is-large is-fullwidth is-success">
                            Next Move
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }

              </div>

            </div>

          </div>
        </div>
      </gameContext.Provider>
    </Fragment>
  )
}
