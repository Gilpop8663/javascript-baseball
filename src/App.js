const { getStrikeCount, getBallCount } = require('./controllers/BaseballGame');
const { RandomNumber } = require('./models/RandomNumber');
const InputView = require('./views/InputView');
const OutputView = require('./views/OupputView');

class App {
  #getResult;

  #computer;

  constructor() {
    this.#getResult = this.getResult.bind(this);
    this.#computer = RandomNumber();
  }

  play() {
    console.log(this.#computer);
    OutputView.printGameStart();
    InputView.readPlayerNumber(this.#getResult);
  }

  getResult(numbers) {
    const player = numbers.split('').map(number => Number(number));
    console.log(player);
    const strikeNumber = getStrikeCount(this.#computer, player);
    console.log(strikeNumber);
    const ballNumber = getBallCount(this.#computer, player);
    console.log(ballNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
