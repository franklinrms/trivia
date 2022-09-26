import { getQuestions } from '../../lib/api';

export const SET_PLAYER_VALUES = 'SET_PLAYER_VALUES';
export const setPlayerValues = (payload) => ({ type: SET_PLAYER_VALUES, payload });

export const SET_QUESTIONS = 'SET_QUESTIONS';
const requestGame = (payload) => ({ type: SET_QUESTIONS, payload });
export const requestQuestions = (navigate) => async (dispatch) => {
  const token = sessionStorage.getItem('TOKEN_TRIVIA');
  const difficulty = sessionStorage.getItem('SETTINGS_TRIVIA') || null;

  const data = await getQuestions(token, difficulty);
  if (data.response_code === 0) {
    dispatch(requestGame(data.results));
  } else {
    sessionStorage.removeItem('TOKEN_TRIVIA');
    navigate('/');
  }
};
