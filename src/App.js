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
    console.log(numbers);
  }
}

const app = new App();
app.play();

module.exports = App;
