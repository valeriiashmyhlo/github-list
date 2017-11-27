import { REPOS_FETCH_SUCCESS, REPO_FETCH_SUCCESS } from './actions';

const initialState = {
  data: {},
  all: [],
  starred: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPOS_FETCH_SUCCESS: {
      const repos = {};
      action.payload.forEach(repo => (repos[repo.full_name] = repo));

      return {
        ...state,
        data: {
          ...state.data,
          ...repos
        },
        all: action.payload.map(repo => repo.full_name)
      };
    }
    case REPO_FETCH_SUCCESS: {
      return {
        ...state,
        [action.payload.full_name]: action.payload
      };
    }
    // case FETCH_REPO_STARRED_SUCCESS: {
    //   return {
    //     ...state,
    //     [action.payload]: {
    //       ...state[action.payload],
    //       starred: true
    //     }
    //   }
    // }
    // case FETCH_REPO_UNSTARRED_SUCCESS: {
    //   return {
    //     ...state,
    //     [action.payload]: {
    //       ...state[action.payload],
    //       starred: false
    //     }
    //   }
    // }
    default:
      return state;
  }
};
