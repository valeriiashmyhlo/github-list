import * as api from '../../githubApi';

export const CONTRIBUTORS_FETCH_SUCCESS = 'CONTRIBUTORS_FETCH_SUCCESS';

export const fetchContributors = ({ owner, repo, page, perPage }) => dispatch =>
  api
    .getContributors({
      owner,
      repo,
      page,
      perPage,
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
