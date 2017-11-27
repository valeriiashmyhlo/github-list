import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { exchangeCodeForToken } from '../features/auth/actions';

class OauthCallbackPage extends Component {
	componentDidMount() {
		this.props
			.exchangeCodeForToken(this.props.location.query.code)
			.then(() => this.props.push('/repos'));
	}
	render() {
		return <div>Please wait</div>;
	}
}

export default connect(null, { exchangeCodeForToken, push })(OauthCallbackPage);
