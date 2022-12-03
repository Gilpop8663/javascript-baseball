const {
  GAME_PLAY_ERROR,
  GAME_RESTART_RULE,
  GAME_NUMBER,
} = require('../src/utils/Constant');
const {
  isLength,
  isZeroInclude,
  isOverlap,
  isNotNumber,
  gameRestartValidation,
} = require('../src/utils/Validation');

describe('예외 처리 테스트', () => {
  const lengthInput = [
    [[1, 2, 3, 4]],
    [[2, 3]],
    [[1]],
    [[1, 2, 3, 4, 5]],
    [[]],
  ];

  const wrongNumberInput = [[[1, 2, 0]], [[3, 2, 0]], [[7, 8, 0]]];

  const overlapInput = [[[1, 2, 1]], [[3, 2, 3]], [[7, 8, 8]]];

  const notNumberInput = [[[NaN, 2, 1]], [[NaN, NaN, 3]], [[7, NaN, 8]]];

  const wrongRestartInput = [['a'], ['asd'], [12], [3], [0], [-1]];

  test.each(lengthInput)(
    `${GAME_NUMBER.all}이 아닌 %s 의 경우 예외 처리`,
    number => {
      expect(() => isLength(number)).toThrow(GAME_PLAY_ERROR.correctInput);
    },
  );

  test.each(wrongNumberInput)(
    '잘못된 숫자가 포함된 %s 의 경우 예외 처리',
    number => {
      expect(() => isZeroInclude(number)).toThrow(
        GAME_PLAY_ERROR.includeWrongNumber,
      );
    },
  );

  test.each(overlapInput)('중복된 숫자가 있는 %s 의 경우 예외 처리', number => {
    expect(() => isOverlap(number)).toThrow(GAME_PLAY_ERROR.overlap);
  });

  test.each(notNumberInput)('숫자가 아닌 %s 의 경우 예외 처리', number => {
    expect(() => isNotNumber(number)).toThrow(GAME_PLAY_ERROR.notNumber);
  });

  test.each(wrongRestartInput)(
    `${GAME_NUMBER.restart}과 ${GAME_NUMBER.quit}가 아닌 %s 의 경우 예외 처리`,
    number => {
      expect(() => gameRestartValidation(number)).toThrow(GAME_RESTART_RULE);
    },
  );
});
