const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const game = new Game(new UserInterface())

game.start()