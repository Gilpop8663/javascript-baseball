const { GAME_MESSAGE } = require('../utils/Constant');

const BaseballGame = {
  getStrikeAndBallCount(computer, player) {
    const strike = BaseballGame.getStrikeCount(computer, player);
    const ball = BaseballGame.getBallCount(computer, player);
    return { strike, ball };
  },
  getStrikeCount(computer, player) {
    const count = computer.filter((number, idx) => {
      return number === player[idx];
    }).length;
    return count;
  },
  getBallCount(computer, player) {
    const count = computer.filter((number, idx) => {
      return player.includes(number) && player[idx] !== number;
    }).length;
    return count;
  },
  getResultString(strike, ball) {
    if (strike === 0 && ball === 0) {
      return GAME_MESSAGE.empty;
    }
    return BaseballGame.getStrikeAndBallString(strike, ball);
  },
  getStrikeAndBallString(strike, ball) {
    let result = '';
    if (ball > 0) {
      result += `${ball}${GAME_MESSAGE.ball} `;
    }
    if (strike > 0) {
      result += `${strike}${GAME_MESSAGE.strike}`;
    }
    return result.trim();
  },
};

module.exports = BaseballGame;
