import * as api from '../../githubApi';

export const REPOS_FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS';
export const REPO_FETCH_SUCCESS = 'REPO_FETCH_SUCCESS';
export const REPOS_STARRED_FETCH_SUCCESS = 'REPOS_STARRED_FETCH_SUCCESS';

export const fetchRepos = ({ page, perPage, sortField, direction }) => dispatch =>
  api
    .getRepos({
      page,
      perPage,
      sortField,
      direction,
      accessToken: window.sessionStorage.getItem('accessToken')
    })
    .then(repos => dispatch(fetchReposSuccess(repos)));

export const fetchReposSuccess = repos => ({
  type: REPOS_FETCH_SUCCESS,
  payload: repos
});

export const fetchRepo = ({ owner, repo }) => dispatch =>
  api
    .getRepo({
      owner,
      repo,
      accessToken: window.sessionStorage.getItem('accessToken')
    })
    .then(repo => dispatch(fetchRepoSuccess(repo)));

export const fetchRepoSuccess = repo => ({
  type: REPO_FETCH_SUCCESS,
  payload: repo
});

export const fetchStarredRepos = ({ page, perPage, sortField, direction }) => dispatch =>
  api
    .getStarredRepos({
      page,
      perPage,
      sortField,
      direction,
      accessToken: window.sessionStorage.getItem('accessToken')
    })
    .then(repos => dispatch(fetchStarredReposSuccess(repos)));

export const fetchStarredReposSuccess = repos => ({
  type: REPOS_STARRED_FETCH_SUCCESS,
  payload: repos
});
