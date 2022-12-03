const GAME_NUMBER = Object.freeze({
  restart: 1,
  quit: 2,
  all: 3,
  pickStart: 1,
  pickEnd: 9,
  zero: 0,
});

const GAME_MESSAGE = Object.freeze({
  ball: '볼',
  finish: `${GAME_NUMBER.all}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  restart: `게임을 새로 시작하려면 ${GAME_NUMBER.restart}, 종료하려면 ${GAME_NUMBER.quit}를 입력하세요.\n`,
  empty: '낫싱',
  input: '숫자를 입력해주세요 : ',
  start: '숫자 야구 게임을 시작합니다.',
  strike: '스트라이크',
});

const GAME_PLAY_RULE = `${GAME_NUMBER.pickStart}부터 ${GAME_NUMBER.pickEnd}까지 서로 다른 수를 3자리 입력해주세요.`;

const GAME_RESTART_RULE = `게임 재시작을 원하시면 ${GAME_NUMBER.restart}, 게임 종료를 원하시면 ${GAME_NUMBER.quit}를 입력해주세요.`;

const GAME_PLAY_ERROR = Object.freeze({
  includeZero: `숫자에 0이 포함되어 있습니다. ${GAME_PLAY_RULE}`,
  overlap: `중복되는 숫자가 있습니다. ${GAME_PLAY_RULE}`,
  threeInput: `숫자는 3개만 입력해야 합니다. ${GAME_PLAY_RULE}`,
  notNumber: `숫자가 아닌 다른 문자열이 포함되어 있습니다. ${GAME_PLAY_RULE}`,
});

module.exports = {
  GAME_RESTART_RULE,
  GAME_PLAY_ERROR,
  GAME_MESSAGE,
  GAME_NUMBER,
};
