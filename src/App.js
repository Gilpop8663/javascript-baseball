const { Console } = require('@woowacourse/mission-utils');
const {
  getStrikeCount,
  getBallCount,
  getResultString,
  getStrikeAndBallCount,
} = require('./controllers/BaseballGame');
const { RandomNumber } = require('./models/RandomNumber');
const { GAME_NUMBER } = require('./utils/Constant');
const InputView = require('./views/InputView');
const OutputView = require('./views/OupputView');

class App {
  #computer;

  #getResult;

  #getRestart;

  constructor() {
    this.#computer = RandomNumber();
    this.#getResult = this.getResult.bind(this);
    this.#getRestart = this.getRestart.bind(this);
  }

  play() {
    console.log(this.#computer);
    OutputView.printGameStart();
    InputView.readPlayerNumber(this.#getResult);
  }

  getResult(numbers) {
    const player = numbers.split('').map(number => Number(number));
    const { strike, ball } = getStrikeAndBallCount(this.#computer, player);
    const resultString = getResultString(strike, ball);
    OutputView.printGameResult(resultString);
    if (strike === 3) {
      InputView.readGameRestart(this.#getRestart);
    }
    InputView.readPlayerNumber(this.#getResult);
  }

  getRestart(number) {
    const player = Number(number);
    if (player === GAME_NUMBER.restart) {
      this.#computer = RandomNumber();
      InputView.readPlayerNumber(this.#getResult);
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
