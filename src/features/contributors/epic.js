// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/merge';
// import { Observable } from 'rxjs/Observable';
// import { CONTRIBUTORS_FETCH, fetchContributorsSuccess } from './actions';
// import { getContributors } from '../../githubApi';

// export default (action$) =>
//   action$
//     .ofType(CONTRIBUTORS_FETCH)
//     .flatMap(({ payload }) =>
//       getContributors(payload).map(contributors => fetchContributorsSuccess(payload.repo, contributors)))
