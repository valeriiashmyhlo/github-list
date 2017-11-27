import * as api from '../../githubApi';

export const EXCHANGE_CODE_FOR_TOKEN = 'EXCHANGE_CODE_FOR_TOKEN';
export const EXCHANGE_CODE_FOR_TOKEN_SUCCESS = 'EXCHANGE_CODE_FOR_TOKEN_SUCCESS';

export const exchangeCodeForToken = code => dispatch =>
  api.exchangeCodeForToken(code).then(token => dispatch(exchangeCodeForTokenSuccess(token)));

export const exchangeCodeForTokenSuccess = data => ({
  type: EXCHANGE_CODE_FOR_TOKEN_SUCCESS,
  payload: data.error ? null : data.access_token
});
