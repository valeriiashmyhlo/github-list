import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Container } from 'reactstrap';
import { logout } from './features/auth/actions';
import { connect } from 'react-redux';
import './App.css';

const App = ({ logout, children }) => (
  <div className="App">
    <Container>
      <header>
        <Link to="/" onClick={logout}>
          Log out
        </Link>
        <h1>Header</h1>
        <Link to={'/repos/starred'} activeClassName="active">
          Starred repos
        </Link>
        <br />
        <Link to={'/repos'} activeClassName="active">
          All repos
        </Link>
      </header>
      {children}
    </Container>
  </div>
);

App.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(App);
