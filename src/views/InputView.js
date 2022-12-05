const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/Constant');

const InputView = {
  readPlayerNumber(callback) {
    Console.readLine(GAME_MESSAGE.input, callback);
  },
  readGameRestart(callback) {
    Console.readLine(GAME_MESSAGE.restart, callback);
  },
};

module.exports = InputView;
