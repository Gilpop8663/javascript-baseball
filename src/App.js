const { Console } = require('@woowacourse/mission-utils');
const {
  getResultString,
  getStrikeAndBallCount,
} = require('./controllers/BaseballGame');
const { RandomNumber } = require('./models/RandomNumber');
const { GAME_NUMBER } = require('./utils/Constant');
const Validation = require('./utils/Validation');
const { gamePlayValidation } = require('./utils/Validation');
const InputView = require('./views/InputView');
const OutputView = require('./views/OupputView');

class App {
  #computer;

  #getPlayerNumber;

  #getRestartNumber;

  constructor() {
    this.#computer = RandomNumber();
    this.#getPlayerNumber = this.getPlayerNumber.bind(this);
    this.#getRestartNumber = this.getRestartNumber.bind(this);
  }

  play() {
    console.log(this.#computer);
    OutputView.printGameStart();
    InputView.readPlayerNumber(this.#getPlayerNumber);
  }

  getPlayerNumber(numbers) {
    const player = numbers.split('').map(number => Number(number));
    gamePlayValidation(player);
    this.getResult(player);
  }

  getResult(player) {
    const { strike, ball } = getStrikeAndBallCount(this.#computer, player);
    const resultString = getResultString(strike, ball);
    OutputView.printGameResult(resultString);
    if (strike === 3) {
      InputView.readGameRestart(this.#getRestartNumber);
    }
    InputView.readPlayerNumber(this.#getPlayerNumber);
  }

  getRestartNumber(number) {
    const player = Number(number);
    Validation.gameRestartValidation(player);
    this.getRestart(player);
  }

  getRestart(player) {
    if (player === GAME_NUMBER.restart) {
      this.#computer = RandomNumber();
      InputView.readPlayerNumber(this.#getPlayerNumber);
    }
    if (player === GAME_NUMBER.quit) {
      App.getGameQuit();
    }
  }

  static getGameQuit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
