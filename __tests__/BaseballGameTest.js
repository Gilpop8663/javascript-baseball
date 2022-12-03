const {
  getStrikeCount,
  getBallCount,
  getResultString,
} = require('../src/controllers/BaseballGame');
const { GAME_MESSAGE } = require('../src/utils/Constant');

describe('야구 게임 함수 테스트', () => {
  const strikeInput = [
    [[1, 2, 3], [1, 2, 3], 3],
    [[1, 7, 9], [6, 7, 9], 2],
    [[7, 8, 9], [7, 9, 8], 1],
    [[4, 5, 6], [5, 6, 7], 0],
    [[1, 6, 8], [8, 9, 1], 0],
  ];

  const ballInput = [
    [[1, 2, 3], [1, 2, 3], 0],
    [[1, 7, 9], [6, 7, 9], 0],
    [[7, 8, 9], [7, 9, 8], 2],
    [[4, 5, 6], [5, 6, 7], 2],
    [[1, 6, 8], [8, 9, 1], 2],
    [[1, 2, 3], [4, 5, 3], 0],
    [[1, 2, 3], [3, 2, 1], 2],
    [[1, 2, 3], [3, 1, 2], 3],
  ];

  const resultInput = [
    [1, 2, `2${GAME_MESSAGE.ball} 1${GAME_MESSAGE.strike}`],
    [3, 0, `3${GAME_MESSAGE.strike}`],
    [0, 0, `${GAME_MESSAGE.empty}`],
    [0, 1, `1${GAME_MESSAGE.ball}`],
    [1, 0, `1${GAME_MESSAGE.strike}`],
  ];

  test.each(strikeInput)(
    '스트라이크 개수 컴퓨터 %s 플레이어 %s 정답 %s 의 경우',
    (computer, player, answer) => {
      expect(getStrikeCount(computer, player)).toBe(answer);
    },
  );

  test.each(ballInput)(
    '볼 개수 컴퓨터 %s 플레이어 %s 정답 %s 의 경우',
    (computer, player, answer) => {
      expect(getBallCount(computer, player)).toBe(answer);
    },
  );

  test.each(resultInput)(
    '게임의 결과 스트라이크 %s 볼 %s 결과 %s 의 경우',
    (strike, ball, answer) => {
      expect(getResultString(strike, ball)).toBe(answer);
    },
  );
});
