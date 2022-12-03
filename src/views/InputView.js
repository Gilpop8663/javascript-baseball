const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/Constant');

const InputView = {
  readPlayerNumber(callback) {
    Console.readLine(GAME_MESSAGE.input, callback);
  },
};

module.exports = InputView;
