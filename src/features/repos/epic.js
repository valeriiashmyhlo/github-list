// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/merge';
// import { Observable } from 'rxjs/Observable';
// import { REPOS_FETCH, fetchReposSeccess, REPO_FETCH, fetchRepoSeccess, STAR_REPO, UNSTAR_REPO, FETCH_REPO_STARRED, fetchRepoStarredSuccess, fetchRepoUnstarredSuccess } from './actions';
// import { getRepos, getRepo, starRepo, unstarRepo, fetchRepoStarred } from '../../githubApi';

// export default (action$, store) =>
//   Observable.merge(
//     action$
//       .ofType(REPOS_FETCH)
//       .flatMap(({ payload }) =>
//         getRepos().map(repos => fetchReposSeccess(repos))),
//     action$
//       .ofType(REPO_FETCH)
//       .flatMap(({ payload }) =>
//         getRepo(payload).map(repo => fetchRepoSeccess(repo))),
//     action$
//       .ofType(FETCH_REPO_STARRED)
//       .flatMap(({ payload }) =>
//         fetchRepoStarred({ ...payload, accessToken: window.sessionStorage.getItem('accessToken') })
//           .map(res => fetchRepoStarredSuccess(res))
//           .catch(err => err.status === 404 ?
//             Observable.of(fetchRepoUnstarredSuccess(err)) :
//             Observable.throw(err))),
//     action$
//       .ofType(STAR_REPO)
//       .flatMap(({ payload }) =>
//         starRepo({ ...payload, accessToken: window.sessionStorage.getItem('accessToken') })),
//     action$
//       .ofType(UNSTAR_REPO)
//       .flatMap(({ payload }) =>
//         unstarRepo({ ...payload, accessToken: window.sessionStorage.getItem('accessToken') }))
//   )
