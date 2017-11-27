import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarredRepos } from '../features/repos/actions';

class StarredReposPage extends Component {
  componentWillMount() {
    this.props.fetchStarredRepos();
  }
  render() {
    return <StarredReposPage repos={this.props.repos} />;
  }
}

export default connect(
  state => ({
    repos: state.repos.starred.map(id => state.repos.data[id])
  }),
  { fetchStarredRepos }
)(StarredReposPage);
