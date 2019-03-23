import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import PlayerSelectBlock from './PlayerSelectBlock'
import { GAME_STARTED } from '../../constants/actions/gamePageActionTypes'
import { PLAYER_TYPES } from '../../constants/game'

SelectPlayers.propTypes = {
  gameContext: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired
}

export default function SelectPlayers({ gameContext, gameInfo }) {
  const dispatch = useContext(gameContext)

  const handleClick = () => {
    dispatch({ type: GAME_STARTED })
  }

  return (
    <Fragment>
      <gameContext.Provider value={dispatch}>
        <div className="container">
          <div className="tile is-ancestor">

            <div className="tile is-parent is-vertical">

              <div className="tile is-parent ">

                <div className="notification tile is-child">
                  Please choose <strong>First</strong> and <strong>Second</strong> players, and click&nbsp;
                  <strong>Start</strong> to begin.&nbsp;
                </div>

              </div>

              <div className="tile is-parent ">

                <article className="tile is-child ">
                  <PlayerSelectBlock
                    gameContext={gameContext} gameInfo={gameInfo}
                    order="first"
                  />
                </article>

                <article className="tile is-child ">
                  <PlayerSelectBlock
                    gameContext={gameContext} gameInfo={gameInfo}
                    order="second"
                  />
                </article>
                {
                  (gameInfo.players.first.type === PLAYER_TYPES.HUMAN && gameInfo.players.second.type === PLAYER_TYPES.HUMAN) ? (
                    <article className="tile is-child ">
                      <p className="title">Ops...</p>
                      <p className="subtitle">Sorry, but 'Human' vs 'Human' mode is not currently supported</p>
                    </article>
                  ) : (

                    <article className="tile is-child ">
                      <p className="title">Ready?</p>
                      <div className="buttons has-addons is-centered">
                        <span onClick={handleClick} className="button is-large is-fullwidth is-success">Start</span>
                      </div>
                    </article>
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
