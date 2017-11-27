import React from 'react';
import { clientId } from '../githubApi';

const LoginPage = () => (
	<div>
		<h4>Login throwght Github</h4>
		<a href={`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=public_repo`}>
			Login
		</a>
	</div>
);

export default LoginPage;
