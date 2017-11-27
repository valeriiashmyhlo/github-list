import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { Media } from 'reactstrap';
import { fetchRepos } from '../features/repos/actions';
import { RepoList } from './RepoList';

class ReposPage extends Component {
  componentWillMount() {
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
