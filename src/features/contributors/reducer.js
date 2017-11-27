import { CONTRIBUTORS_FETCH_SUCCESS } from './actions';
export default (state = {}, action) => {
  switch (action.type) {
    case CONTRIBUTORS_FETCH_SUCCESS: {
      return {
        ...state,
        [action.payload.owner + '/' + action.payload.repo]: action.payload.contributors
      };
    }
    default:
      return state;
  }
};
