import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStarredRepos } from '../features/repos/actions';
import { RepoList } from './RepoList';
import Pagination from './Pagination';
import Sort from './Sort';
import { withQueryDefaults } from '../utils';

class StarredReposPage extends Component {
  componentDidMount() {
    const { page, perPage, direction } = withQueryDefaults(this.props.location.query);

    this.props.fetchStarredRepos({ page, perPage, direction, sortField: 'full_name' });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.location.query.page !== nextProps.location.query.page ||
      this.props.location.query.perPage !== nextProps.location.query.perPage ||
      this.props.location.query.direction !== nextProps.location.query.direction
    ) {
      this.props.fetchStarredRepos({
        page: nextProps.location.query.page,
        perPage: nextProps.location.query.perPage,
        direction: nextProps.location.query.direction,
        sortField: 'full_name'
      });
    }
  }

  render() {
    const path = '/repos/starred';
    const { page, perPage, direction } = withQueryDefaults(this.props.location.query);

    return (
      <div>
        <Pagination path={path} page={page} perPage={perPage} items={this.props.repos} />
        <Sort path={path} page={page} perPage={perPage} direction={direction} />
        <RepoList repos={this.props.repos} />
      </div>
    );
  }
}

StarredReposPage.propTypes = {
  repos: PropTypes.array.isRequired,
  fetchStarredRepos: PropTypes.func.isRequired
};

export default connect(
  state => ({
    repos: state.repos.starred.map(id => state.repos.data[id])
  }),
  { fetchStarredRepos }
)(StarredReposPage);
