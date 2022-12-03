const { Console } = require('@woowacourse/mission-utils');
const {
  getResultString,
  getStrikeAndBallCount,
} = require('./controllers/BaseballGame');
const { GAME_NUMBER } = require('./utils/Constant');
const { RandomNumber } = require('./models/RandomNumber');
const InputView = require('./views/InputView');
const OutputView = require('./views/OupputView');
const Validation = require('./utils/Validation');

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
    OutputView.printGameStart();
    InputView.readPlayerNumber(this.#getPlayerNumber);
  }

  getPlayerNumber(numbers) {
    console.log(this.#computer);
    const player = numbers.split('').map(number => Number(number));
    Validation.gamePlayValidation(player);
    this.getResult(player);
  }

  getResult(player) {
    const { strike, ball } = getStrikeAndBallCount(this.#computer, player);
    const resultString = getResultString(strike, ball);
    OutputView.printGameResult(resultString);
    if (strike === GAME_NUMBER.all) {
      OutputView.printGameFinish();
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
