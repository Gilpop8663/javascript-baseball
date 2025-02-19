const { Random } = require('@woowacourse/mission-utils');

const RandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

module.exports = {
  RandomNumber,
};
