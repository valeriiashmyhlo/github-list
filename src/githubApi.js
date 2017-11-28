export const clientId = process.env.REACT_APP_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const openReverseProxy = url => `https://cors-anywhere.herokuapp.com/${url}`;

export const exchangeCodeForToken = code =>
  fetch(
    openReverseProxy(
      'https://github.com/login/oauth/access_token' +
        `?client_id=${clientId}&code=${code}&client_secret=${clientSecret}`
    ),
    {
      headers: {
        Accept: 'application/json'
      }
    }
  ).then(res => res.json());

export const getRepos = ({ page, perPage, sortField, direction, accessToken }) =>
  fetch(
    `https://api.github.com/user/repos` +
      `?sort=${sortField}&direction=${direction}` +
      `&page=${page}&per_page=${perPage}&access_token=${accessToken}`,
    {
      method: 'GET'
    }
  ).then(res => res.json());

export const getStarredRepos = ({ page, perPage, sortField, direction, accessToken }) =>
  fetch(
    `https://api.github.com/user/starred` +
      `?sort=${sortField}&direction=${direction}` +
      `&page=${page}&per_page=${perPage}&access_token=${accessToken}`,
    {
      method: 'GET'
    }
  ).then(res => res.json());

export const getRepo = ({ owner, repo, accessToken }) =>
  fetch(`https://api.github.com/repos/${owner}/${repo}?access_token=${accessToken}`, {
    method: 'GET'
  }).then(res => res.json());

export const getContributors = ({ owner, repo, page, perPage, accessToken }) =>
  fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors` +
      `?page=${page}&per_page=${perPage}&access_token=${accessToken}`,
    {
      method: 'GET'
    }
  ).then(res => res.json());

export const getRepoStarred = ({ owner, repo, accessToken }) =>
  fetch(`https://api.github.com/user/starred/${owner}/${repo}?access_token=${accessToken}`, {
    method: 'GET',
    headers: {
      'Content-Length': 0
    }
  });

export const starRepo = ({ owner, repo, accessToken }) =>
  fetch(`https://api.github.com/user/starred/${owner}/${repo}?access_token=${accessToken}`, {
    method: 'PUT',
    headers: {
      'Content-Length': 0
    }
  });

export const unstarRepo = ({ owner, repo, accessToken }) =>
  fetch(`https://api.github.com/user/starred/${owner}/${repo}?access_token=${accessToken}`, {
    method: 'DELETE'
  });
