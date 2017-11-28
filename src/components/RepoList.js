import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Media } from 'reactstrap';

export const RepoList = ({ repos }) => (
  <div>
    {repos.map(repo => (
      <Media key={repo.full_name}>
        <Media left href="#">
          <Media
            object
            src={repo.owner.avatar_url}
            className="repo-list__img"
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading>{repo.owner.login}</Media>
          <Media heading>{repo.name}</Media>
          <a href={repo.html_url}>{repo.html_url}</a>
          <p>{repo.description}</p>
          <Link to={`/repos/${repo.full_name}`}>Show contributors</Link>
        </Media>
      </Media>
    ))}
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      full_name: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  )
};
