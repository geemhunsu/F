import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import { LoginPage, MainPage } from '../pages';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LoginPage} />
        <Route path='/main' exact component={MainPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
