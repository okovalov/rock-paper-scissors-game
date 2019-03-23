export const MOVES_MAP = ['None', 'Paper', 'Scissors', 'Rock']
export const PLAYER_TYPES = { AI: 'ai', HUMAN: 'human' }
export const FIGURES = [
  {
    id: 1,
    moveImage: 'paper.png',
    moveValue: 1,
    moveTitle: 'Paper'
  },
  {
    id: 2,
    moveImage: 'scissors.jpg',
    moveValue: 2,
    moveTitle: 'Scissors'
  },
  {
    id: 3,
    moveImage: 'rock.png',
    moveValue: 3,
    moveTitle: 'Rock'
  }
]
export const STRATEGIES = {
  CLASSIC: 'classic',
  SPOKE: 'spoke'
}
export const RULES = {
  classic: 'A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper").',
  spoke: 'More to come..'
}
