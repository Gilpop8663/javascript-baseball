const { RandomNumber } = require('../src/models/RandomNumber');
const { GAME_NUMBER } = require('../src/utils/Constant');

describe('랜덤 숫자 생성 테스트', () => {
  const input = [];

  for (let count = 0; count < 10; count += 1) {
    const numberArray = RandomNumber();
    input.push([numberArray]);
  }

  test.each(input)(
    '랜덤 생성한 숫자 %s 가 올바르게 생성 되었는 지 테스트',
    numbers => {
      numbers.forEach(number => {
        expect(number).toBeGreaterThanOrEqual(GAME_NUMBER.pickStart);
        expect(number).toBeLessThanOrEqual(GAME_NUMBER.pickEnd);
      });
    },
  );
});
