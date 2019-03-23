import React, { Fragment } from 'react'
import Locale from '../../../utils/locale'

const HomePage = () => (
  <Fragment>
    <section className="section">
      <div className="container">
        <h1 className="title">{Locale.trans('WELCOME')}</h1>
        <p className="has-text-justified">
        Rock, Paper, Scissors (aka "Ro-Sham-Bo", janken, "Bato, Bato, Pick" and "Scissors, Paper, Stone") is a simple hand game that is played around the world, with many different names and variations.
        Most known is a "classical" one, where a player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper").
        </p>
      </div>
    </section>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="subtitle has-text-primary has-text-weight-bold">What is this?</p>
          <p className="has-text-justified">Play Rock, Paper, Scissors the next time you need to resolve some disagreement in a flash. For instance, you could compete for the privilege of getting the window seat. And, of course, you can always play a series of games to give each player a fighting chance.</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="subtitle has-text-primary has-text-weight-bold">What For?</p>
          <p className="has-text-justified"> Unless you’re playing for amusement’s sake, some issue will normally be hanging in the balance. Maybe you’re trying to decide who gets the last slice of pizza, or who should be first in line to try out a new waterslide. In most cases, Rock, Paper, Scissors is played as a means to help make a choice or put an end to a disagreement. The idea is that both players have an equal chance of winning, making the game random but fair.</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="subtitle has-text-primary has-text-weight-bold">That is it?</p>
          <p className="has-text-justified">Even if there’s nothing riding on the game, you can still play Rock, Paper, Scissors for your own enjoyment. Keep tally of you and your opponent’s wins and losses, and play until one of you reaches a predetermined number. It’s similar to Tic-Tac-Toe in that you can go through multiple games in a lightning-quick fashion. That spontaneity will help keep you on your toes!</p>
        </article>
      </div>
    </div>
  </Fragment>
)

export default HomePage
