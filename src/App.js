const {
  getStrikeCount,
  getBallCount,
  getResultString,
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
    const strikeNumber = getStrikeCount(this.#computer, player);
    const ballNumber = getBallCount(this.#computer, player);
    const resultString = getResultString(strikeNumber, ballNumber);
    OutputView.printGameResult(resultString);
    if (strikeNumber === 3) {
      InputView.readGameRestart(this.#getRestart);
    }
  }

  getRestart(number) {
    const player = Number(number);
    if (player === GAME_NUMBER.restart) {
      InputView.readPlayerNumber(this.#getResult);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
