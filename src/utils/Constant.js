const GAME_NUMBER = Object.freeze({
  restart: 1,
  quit: 2,
  all: 3,
});

const GAME_MESSAGE = Object.freeze({
  ball: '볼',
  input: '숫자를 입력해주세요 : ',
  start: '숫자 야구 게임을 시작합니다.',
  strike: '스트라이크',
  finish: `${GAME_NUMBER.all}개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 ${GAME_NUMBER.restart}, 종료하려면 ${GAME_NUMBER.quit}를 입력하세요.`,
});

module.exports = {
  GAME_MESSAGE,
  GAME_NUMBER,
};
