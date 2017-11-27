import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../features/repos/actions';
import { RepoList } from './RepoList';

class ReposPage extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return <RepoList repos={this.props.repos} />;
  }
}

export default connect(
  state => ({
    repos: state.repos.all.map(id => state.repos.data[id])
  }),
  { fetchRepos }
)(ReposPage);
