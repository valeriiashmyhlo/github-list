import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos } from '../features/repos/actions';
import { RepoList } from './RepoList';
import Sort from './Sort';
import Pagination from './Pagination';
import { withQueryDefaults } from '../utils';

class ReposPage extends Component {
  componentDidMount() {
    const { page, perPage, direction } = withQueryDefaults(this.props.location.query);

    this.props.fetchRepos({ page, perPage, direction, sortField: 'full_name' });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.location.query.page !== nextProps.location.query.page ||
      this.props.location.query.perPage !== nextProps.location.query.perPage ||
      this.props.location.query.direction !== nextProps.location.query.direction
    ) {
      this.props.fetchRepos({
        page: nextProps.location.query.page,
        perPage: nextProps.location.query.perPage,
        direction: nextProps.location.query.direction,
        sortField: 'full_name'
      });
    }
  }

  render() {
    const path = `/repos`;
    const { page, perPage, direction } = withQueryDefaults(this.props.location.query);

    return (
      <div>
        <Pagination
          path={path}
          page={page}
          perPage={perPage}
          direction={direction}
          items={this.props.repos}
        />
        <Sort path={path} page={page} perPage={perPage} direction={direction} />
        <RepoList repos={this.props.repos} />
      </div>
    );
  }
}

ReposPage.propTypes = {
  repos: PropTypes.array.isRequired,
  fetchRepos: PropTypes.func.isRequired
};

export default connect(
  state => ({
    repos: state.repos.all.map(id => state.repos.data[id])
  }),
  { fetchRepos }
)(ReposPage);
