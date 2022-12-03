const {
  GAME_PLAY_ERROR,
  GAME_NUMBER,
  GAME_RESTART_RULE,
} = require('./Constant');

const Validation = {
  gamePlayValidation(player) {
    Validation.isNotNumber(player);
    Validation.isLength(player);
    Validation.isZeroInclude(player);
    Validation.isOverlap(player);
  },
  isLength(numbers) {
    if (numbers.length !== GAME_NUMBER.all) {
      throw new Error(GAME_PLAY_ERROR.threeInput);
    }
  },
  isZeroInclude(numbers) {
    if (numbers.includes(GAME_NUMBER.zero)) {
      throw new Error(GAME_PLAY_ERROR.includeZero);
    }
  },
  isOverlap(numbers) {
    const newNumbers = new Set(numbers);
    if (newNumbers.size !== numbers.length) {
      throw new Error(GAME_PLAY_ERROR.overlap);
    }
  },
  isNotNumber(numbers) {
    numbers.forEach(number => {
      if (Number.isNaN(number)) {
        throw new Error(GAME_PLAY_ERROR.notNumber);
      }
    });
  },
  gameRestartValidation(player) {
    if (player !== 1 && player !== 2) {
      throw new Error(GAME_RESTART_RULE);
    }
  },
};

module.exports = Validation;
