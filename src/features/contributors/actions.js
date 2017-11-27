import * as api from '../../githubApi';

export const CONTRIBUTORS_FETCH = 'CONTRIBUTORS_FETCH';
export const CONTRIBUTORS_FETCH_SUCCESS = 'CONTRIBUTORS_FETCH_SUCCESS';

export const fetchContributors = ({ owner, repo }) => dispatch =>
  api
    .getContributors({
      owner,
      repo,
      accessToken: window.sessionStorage.getItem('accessToken')
    })
    .then(contributors => dispatch(fetchContributorsSuccess({ owner, repo }, contributors)));

export const fetchContributorsSuccess = ({ owner, repo }, contributors) => ({
  type: CONTRIBUTORS_FETCH_SUCCESS,
  payload: {
    owner,
    repo,
    contributors
  }
});
