import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import LoginPage from './components/LoginPage';
import OauthCallbackPage from './components/OauthCallbackPage';
import ReposPage from './components/ReposPage';
import StarredReposPage from './components/StarredReposPage';
import Repo from './components/Repo';
import registerServiceWorker from './registerServiceWorker';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

const onAuthEnter = (_, replace) => {
  if (window.sessionStorage.getItem('accessToken')) {
    replace('/repos');
  }
};

const onPrivateEnter = (_, replace) => {
  if (!window.sessionStorage.getItem('accessToken')) {
    replace('/login');
  }
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to="/login" />

        <Route onEnter={onAuthEnter}>
          <Route path="login" component={LoginPage} />
          <Route path="oauth-callback" component={OauthCallbackPage} />
        </Route>

        <Route component={App} onEnter={onPrivateEnter}>
          <Route path="repos" component={ReposPage} />
          <Route path="repos/starred" component={StarredReposPage} />
          <Route path="repos/:ownerName/:repoName" component={Repo} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
