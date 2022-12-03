const BaseballGame = {
  getStrike(computer, player) {
    const count = computer.filter((number, idx) => {
      return number === player[idx];
    }).length;
    return count;
  },
};

module.exports = BaseballGame;
