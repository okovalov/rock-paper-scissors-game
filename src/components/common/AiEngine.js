import { STRATEGIES } from '../../constants/game'

export default class AiEngine {
  constructor(props) {
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.whoWins = this.whoWins.bind(this)
    this.whoWinsClassical = this.whoWinsClassical.bind(this)
    this.whoWinsSpoke = this.whoWinsSpoke.bind(this)
  }

  getRandomNumber = (min = 1, max = 3) => Math.floor(Math.random() * (max - min + 1)) + min

  whoWins = (firstPlayerMove, secondPlayerMove, strategy = STRATEGIES.CLASSIC) => {
    if (strategy === STRATEGIES.CLASSIC) return this.whoWinsClassical(firstPlayerMove, secondPlayerMove, strategy)
    if (strategy === STRATEGIES.SPOKE) return this.whoWinsSpoke(firstPlayerMove, secondPlayerMove, strategy)

    return 0
  }

  whoWinsClassical = (firstPlayerMove, secondPlayerMove) => {
    const diff = firstPlayerMove - secondPlayerMove

    if (diff < 0) {
      return 3 - Math.abs(diff)
    }

    return diff
  }

  whoWinsSpoke = (firstPlayerMove, secondPlayerMove) => {
    // to be added?
    return 0
  }
}