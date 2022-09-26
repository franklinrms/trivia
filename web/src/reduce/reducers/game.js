import { SET_QUESTIONS } from '../actions';

// eslint-disable-next-line default-param-last
const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;

    default:
      return state;
  }
};
export default questionsReducer;
