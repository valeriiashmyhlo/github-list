import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/then';
import 'rxjs/add/observable/dom/ajax';

export const clientId = process.env.REACT_APP_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const openReverseProxy = url => `https://cors-anywhere.herokuapp.com/${url}`;

export const exchangeCodeForToken = code =>
  fetch(
    openReverseProxy(
      `https://github.com/login/oauth/access_token?client_id=${clientId}&code=${code}&client_secret=${clientSecret}`
    ),
    {
      headers: {
        Accept: 'application/json'
      }
    }
  ).then(res => res.json());

export const getRepos = () =>
  fetch('https://api.github.com/repositories', {
    method: 'GET'
  }).then(res => res.json());

export const getRepo = ({ owner, repo, accessToken }) =>
  fetch(`https://api.github.com/repos/${owner}/${repo}?access_token=${accessToken}`, {
    method: 'GET'
  }).then(res => res.json());

export const getContributors = ({ owner, repo, accessToken }) =>
  fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?access_token=${accessToken}`, {
    method: 'GET'
  }).then(res => res.json());

export const fetchRepoStarred = ({ owner, repo, accessToken }) =>
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

export const getStarredRepos = () =>
  fetch('https://api.github.com/user/starred', {
    method: 'GET'
  });
