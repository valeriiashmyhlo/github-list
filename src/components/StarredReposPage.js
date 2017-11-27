import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarredRepos } from '../features/repos/actions';
import { RepoList } from './RepoList';

class StarredReposPage extends Component {
  componentDidMount() {
    this.props.fetchStarredRepos();
  }

  render() {
    return <RepoList repos={this.props.repos} />;
  }
}

export default connect(
  state => ({
    repos: state.repos.starred.map(id => state.repos.data[id])
  }),
  { fetchStarredRepos }
)(StarredReposPage);
