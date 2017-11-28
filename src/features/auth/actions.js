import * as api from '../../githubApi';

export const exchangeCodeForToken = code => dispatch =>
	api.exchangeCodeForToken(code).then(data => {
		window.sessionStorage.setItem('accessToken', data.error ? null : data.access_token);
	});

export const logout = () => dispatch => window.sessionStorage.removeItem('accessToken');
