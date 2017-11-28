import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Media, CardColumns, Button } from 'reactstrap';
import { fetchRepo } from '../features/repos/actions';
import { fetchRepoStarred, starRepo, unstarRepo } from '../features/stars/actions';
import { fetchContributors } from '../features/contributors/actions';
import Contributor from './Contributor';
import Pagination from './Pagination';

class Repo extends Component {
  componentDidMount() {
    const page = this.props.location.query.page || 1;
    const perPage = this.props.location.query.perPage || 10;

    this.props.fetchRepo({ owner: this.props.params.ownerName, repo: this.props.params.repoName });
    this.props.fetchContributors({
      owner: this.props.params.ownerName,
      repo: this.props.params.repoName,
      page,
      perPage
    });
    this.props.fetchRepoStarred({
      owner: this.props.params.ownerName,
      repo: this.props.params.repoName
    });
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.location.query.page !== nextProps.location.query.page ||
      this.props.location.query.perPage !== nextProps.location.query.perPage
    ) {
      this.props.fetchContributors({
        owner: this.props.params.ownerName,
        repo: this.props.params.repoName,
        page: nextProps.location.query.page,
        perPage: nextProps.location.query.perPage
      });
    }
  }

  handleStar() {
    this.props.starRepo({ owner: this.props.params.ownerName, repo: this.props.params.repoName });
  }

  handleUnstar() {
    this.props.unstarRepo({ owner: this.props.params.ownerName, repo: this.props.params.repoName });
  }

  render() {
    const { repo, contributors, starred } = this.props;
    const path = `/repos/${this.props.params.ownerName}/${this.props.params.repoName}`;
    const page = this.props.location.query.page || 1;
    const perPage = this.props.location.query.perPage || 10;
    const direction = this.props.location.query.direction || 'asc';

    if (repo) {
      return (
        <div>
          <Media>
            <Media left href="#">
              <Media
                object
                src={repo.owner.avatar_url}
                className="repo-list__img"
                alt="Generic placeholder image"
              />
            </Media>
            <Media body>
              <Media heading>{repo.name}</Media>
              <Media heading>{repo.owner.login}</Media>
              <a href={repo.html_url}>{repo.html_url}</a>
              <p>{repo.description}</p>
              <p>★ {repo.stargazers_count}</p>
              {starred ? (
                <Button onClick={this.handleUnstar.bind(this)}>Untar</Button>
              ) : (
                <Button onClick={this.handleStar.bind(this)}>Star</Button>
              )}
            </Media>
          </Media>
          <h2>Contributors</h2>
          <Pagination
            path={path}
            page={page}
            perPage={perPage}
            direction={direction}
            items={contributors}
          />
          <CardColumns>
            {contributors.map(contributor => (
              <Contributor key={contributor.id} contributor={contributor} />
            ))}
          </CardColumns>
        </div>
      );
    } else {
      return null;
    }
  }
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired
    }).isRequired,
    html_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired
  }).isRequired,
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ),
  starred: PropTypes.bool,
  fetchRepo: PropTypes.func.isRequired,
  fetchContributors: PropTypes.func.isRequired,
  fetchRepoStarred: PropTypes.func.isRequired,
  starRepo: PropTypes.func.isRequired,
  unstarRepo: PropTypes.func.isRequired
};

export default connect(
  (state, props) => {
    const fullName = props.params.ownerName + '/' + props.params.repoName;

    return {
      repo: state.repos[fullName],
      contributors: state.contributors[fullName] || [],
      starred: state.stars[fullName]
    };
  },
  { fetchRepo, fetchContributors, fetchRepoStarred, starRepo, unstarRepo }
)(Repo);
