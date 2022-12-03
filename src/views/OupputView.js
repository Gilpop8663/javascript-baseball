const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/Constant');

const OutputView = {
  printGameStart() {
    Console.print(GAME_MESSAGE.start);
  },
  printGameResult(result) {
    Console.print(result);
  },
};

module.exports = OutputView;
