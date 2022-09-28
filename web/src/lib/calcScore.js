export default function calcScore(difficulty, prevScore) {
  const timer = JSON.parse(sessionStorage.getItem('TIMER_TRIVIA')) - 1;
  const point = 10;
  const type = {
    easy: 1,
    medium: 2,
    hard: 3,
  };
  return prevScore + point + (timer * type[difficulty]);
}
