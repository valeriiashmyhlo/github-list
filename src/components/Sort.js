import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class extends Component {
  static propTypes = {
    path: PropTypes.string,
    page: PropTypes.string,
    perPage: PropTypes.string,
    direction: PropTypes.string
  };

  render() {
    const { path, page, perPage, direction } = this.props;

    return direction === 'asc' ? (
      <Link to={`${path}?page=${page}&perPage=${perPage}&direction=desc`}>Sort repo by name ↑</Link>
    ) : (
      <Link to={`${path}?page=${page}&perPage=${perPage}&direction=asc`}>Sort repo by name ↓</Link>
    );
  }
}
