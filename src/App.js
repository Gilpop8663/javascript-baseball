const InputView = require('./views/InputView');
const OutputView = require('./views/OupputView');

class App {
  #getResult;

  constructor() {
    this.#getResult = this.getResult.bind(this);
  }

  play() {
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
