import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Media } from 'reactstrap';
// import { fetchRepos } from '../features/repos/actions';

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
