import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Pagination, PaginationItem } from 'reactstrap';

export default class extends Component {
  static propTypes = {
    path: PropTypes.string,
    page: PropTypes.string,
    perPage: PropTypes.string,
    direction: PropTypes.string,
    items: PropTypes.array
  };

  render() {
    const { path, page, perPage, direction, items } = this.props;

    return (
      <Pagination size="sm">
        <PaginationItem disabled={+page - 1 <= 0}>
          <Link
            to={`${path}?page=${+page - 1}&perPage=${perPage}&direction=${direction}`}
            className="page-link"
          >
            «
          </Link>
        </PaginationItem>

        {+page > 2 && (
          <PaginationItem>
            <Link
              to={`${path}?page=${1}&perPage=${perPage}&direction=${direction}`}
              className="page-link"
            >
              1
            </Link>
          </PaginationItem>
        )}

        {+page > 2 && (
          <PaginationItem disabled className="ml-1 mr-1">
            &hellip;
          </PaginationItem>
        )}

        {+page - 1 > 0 && (
          <PaginationItem disabled={+page - 1 <= 0}>
            <Link
              to={`${path}?page=${+page - 1}&perPage=${perPage}&direction=${direction}`}
              className="page-link"
            >
              {+page - 1}
            </Link>
          </PaginationItem>
        )}

        <PaginationItem active>
          <Link
            to={`${path}?page=${+page}&perPage=${perPage}&direction=${direction}`}
            className="page-link"
          >
            {+page}
          </Link>
        </PaginationItem>

        {!(items.length < perPage) && (
          <PaginationItem>
            <Link
              to={`${path}?page=${+page + 1}&perPage=${perPage}&direction=${direction}`}
              className="page-link"
            >
              {+page + 1}
            </Link>
          </PaginationItem>
        )}

        <PaginationItem disabled={items.length < perPage}>
          <Link
            to={`${path}?page=${+page + 1}&perPage=${perPage}&direction=${direction}`}
            className="page-link"
          >
            »
          </Link>
        </PaginationItem>
      </Pagination>
    );
  }
}
