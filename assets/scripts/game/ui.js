'use strict'

const engine = require('./engine')
const store = require('./../store')

const newGameSuccess = data => {
  $('#game-status').text('You started a new game!')
  store.game = data.game
  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'Game in progress'
  $('.game-square').text('-')
}

const newGameFailure = () => {
  $('#game-status').text('New game failure')
}

const squareClickSuccess = data => {
  $('#game-status').text(store.gameStatus)
  store.game = data.game
  $('#square-' + store.index).text(store.currentPlayer)
  engine.changePlayer()
}

const takenSquareFailure = () => {
  $('#game-status').text('Square already taken!')
}

const gameOverFailure = () => {
  $('#game-status').text('Please start a new game!')
}

const getGamesPlayedSuccess = data => {
  store.gamesPlayed = data.games.length
}

const getGamesWonSuccess = data => {
  store.gamesWon = data.games.length
  $('#game-stats').text('Games Played: ' + store.gamesPlayed + ' | Games Won: ' + store.gamesWon)
}

const getStatsFailure = () => {
  $('#game-stats').text('Failed getting stats')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  squareClickSuccess,
  takenSquareFailure,
  gameOverFailure,
  getGamesPlayedSuccess,
  getGamesWonSuccess,
  getStatsFailure
}
