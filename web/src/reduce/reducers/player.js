import {
  SET_PLAYER_VALUES,
  SET_SCORE_VALUE,
} from '../actions';

const INITIAL_STATE = {
  name: 'anonymous',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

// eslint-disable-next-line default-param-last
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYER_VALUES:
      return action.payload;
    case SET_SCORE_VALUE:
      return { ...state, score: action.payload, assertions: state.assertions + 1 };

    default:
      return state;
  }
};

export default userReducer;
