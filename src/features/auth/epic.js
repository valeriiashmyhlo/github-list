// import { Observable } from 'rxjs/Observable';
// import { push } from 'react-router-redux';
// import { EXCHANGE_CODE_FOR_TOKEN, exchangeCodeForTokenSuccess, EXCHANGE_CODE_FOR_TOKEN_SUCCESS } from './actions';
// import { exchangeCodeForToken } from '../../githubApi';

// export default (action$) =>
//   Observable.merge(
//     action$
//       .ofType(EXCHANGE_CODE_FOR_TOKEN)
//       .flatMap(({ payload }) =>
//         exchangeCodeForToken(payload).map(exchangeCodeForTokenSuccess)),
//     action$
//       .ofType(EXCHANGE_CODE_FOR_TOKEN_SUCCESS)
//       .map(({ payload }) => {
//         window.sessionStorage.setItem('accessToken', payload);
//         return push('/repos');
//       })
//   )
