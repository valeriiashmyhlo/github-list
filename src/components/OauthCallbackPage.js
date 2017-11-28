import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

OauthCallbackPage.propTypes = {
	exchangeCodeForToken: PropTypes.func.isRequired,
	push: PropTypes.func.isRequired
};

export default connect(null, { exchangeCodeForToken, push })(OauthCallbackPage);
