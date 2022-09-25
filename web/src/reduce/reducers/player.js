import {
  SET_PLAYER_VALUES,
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

    default:
      return state;
  }
};

export default userReducer;
