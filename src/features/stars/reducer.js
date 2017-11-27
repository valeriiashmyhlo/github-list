import { FETCH_REPO_STARRED_SUCCESS, FETCH_REPO_UNSTARRED_SUCCESS } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPO_STARRED_SUCCESS: {
      return {
        ...state,
        [action.payload.owner + '/' + action.payload.repo]: true
      };
    }
    case FETCH_REPO_UNSTARRED_SUCCESS: {
      return {
        ...state,
        [action.payload.owner + '/' + action.payload.repo]: false
      };
    }
    default:
      return state;
  }
};
