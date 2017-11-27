import * as api from '../../githubApi';

export const STAR_REPO = 'STAR_REPO';
export const UNSTAR_REPO = 'UNSTAR_REPO';
export const FETCH_REPO_STARRED = 'FETCH_REPO_STARRED';
export const FETCH_REPO_STARRED_SUCCESS = 'FETCH_REPO_STARRED_SUCCESS';
export const FETCH_REPO_UNSTARRED_SUCCESS = 'FETCH_REPO_UNSTARRED_SUCCESS';

export const starRepo = ({ owner, repo }) => dispatch =>
  api
    .starRepo({ owner, repo, accessToken: window.sessionStorage.getItem('accessToken') })
    .then(() => dispatch(fetchRepoStarredSuccess({ owner, repo })));

export const unstarRepo = ({ owner, repo }) => dispatch =>
  api
    .unstarRepo({ owner, repo, accessToken: window.sessionStorage.getItem('accessToken') })
    .then(() => dispatch(fetchRepoUnstarredSuccess({ owner, repo })));

export const fetchRepoStarred = ({ owner, repo }) => dispatch =>
  api
    .fetchRepoStarred({ owner, repo, accessToken: window.sessionStorage.getItem('accessToken') })
    .then(res => {
      switch (res.status) {
        case 404:
          return dispatch(fetchRepoUnstarredSuccess({ owner, repo }));
        case 204:
          return dispatch(fetchRepoStarredSuccess({ owner, repo }));
        default:
          throw res;
      }
    });

export const fetchRepoStarredSuccess = ({ owner, repo }) => ({
  type: FETCH_REPO_STARRED_SUCCESS,
  payload: {
    owner,
    repo
  }
});

export const fetchRepoUnstarredSuccess = ({ owner, repo }) => ({
  type: FETCH_REPO_UNSTARRED_SUCCESS,
  payload: {
    owner,
    repo
  }
});
