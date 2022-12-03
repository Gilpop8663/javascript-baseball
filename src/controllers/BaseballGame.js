const BaseballGame = {
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
};

module.exports = BaseballGame;
