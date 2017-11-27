import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Media, CardColumns, Button } from 'reactstrap';
import { fetchRepo } from '../features/repos/actions';
import { fetchRepoStarred, starRepo, unstarRepo } from '../features/stars/actions';
import { fetchContributors } from '../features/contributors/actions';
import Contributor from './Contributor';

class Repo extends Component {
  componentDidMount() {
    this.props.fetchRepo({ owner: this.props.params.ownerName, repo: this.props.params.repoName });
    this.props.fetchContributors({
      owner: this.props.params.ownerName,
      repo: this.props.params.repoName
    });
    this.props.fetchRepoStarred({
      owner: this.props.params.ownerName,
      repo: this.props.params.repoName
    });
  }

  handleStar() {
    this.props.starRepo({ owner: this.props.params.ownerName, repo: this.props.params.repoName });
  }

  handleUnstar() {
    this.props.unstarRepo({ owner: this.props.params.ownerName, repo: this.props.params.repoName });
  }

  render() {
    const { repo, contributors, starred } = this.props;

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
