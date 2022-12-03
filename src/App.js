const OutputView = require('./views/OupputView');

class App {
  play() {
    OutputView.printGameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
