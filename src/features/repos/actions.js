import * as api from '../../githubApi';

export const REPOS_FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS';
export const REPO_FETCH_SUCCESS = 'REPO_FETCH_SUCCESS';
export const REPOS_STARRED_FETCH_SUCCESS = 'REPOS_STARRED_FETCH_SUCCESS';

export const fetchRepos = () => dispatch =>
  api.getRepos().then(repos => dispatch(fetchReposSuccess(repos)));

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

export const fetchStarredRepos = () => dispatch =>
  api
    .getStarredRepos({
      accessToken: window.sessionStorage.getItem('accessToken')
    })
    .then(repo => dispatch(fetchStarredReposSuccess(repo)));

export const fetchStarredReposSuccess = ({ owner, repo }) => ({
  type: REPOS_STARRED_FETCH_SUCCESS,
  payload: {
    owner,
    repo
  }
});
