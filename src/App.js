import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import RepoList from './components/RepoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <h1>Header</h1>
          </header>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
