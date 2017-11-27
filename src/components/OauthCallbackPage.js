import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exchangeCodeForToken } from '../features/auth/actions';

class OauthCallbackPage extends Component {
	componentDidMount() {
		this.props.exchangeCodeForToken(this.props.location.query.code);
	}
	render() {
		return <div>Please wait</div>;
	}
}

export default connect(null, { exchangeCodeForToken })(OauthCallbackPage);
