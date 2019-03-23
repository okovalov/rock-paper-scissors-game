import React from 'react'
import PropTypes from 'prop-types'

HistoryInfoBlock.propTypes = {
  gameContext: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired
}

export default function HistoryInfoBlock({ gameContext, gameInfo }) {
  return (
    <div className="tile is-parent notification is-primary">
      <div className="tile is-child  is-primary has-text-centered notification">
        <p className="title is-uppercase">Total Played</p>
        <p className="title is-uppercase">{ gameInfo.moves.current - 1 }</p>
      </div>
      <div className="tile is-child  is-primary notification">

        <table className="table is-fullwidth " >
          <thead>
            <tr>
              <th>{gameInfo.players.first.type}</th>
              <th>{gameInfo.players.second.type}</th>
              <th>winner</th>
            </tr>
          </thead>
          <tbody>
            {
              gameInfo.history
                .sort((a, b) => b.id - a.id)
                .slice(0, 1).map(entry => {
                  return (
                    <tr key={entry.id}>
                      <td style={{ width: '30%'}}>{entry.first}</td>
                      <td style={{ width: '30%'}}>{entry.second}</td>
                      <td>{entry.winnerType}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
