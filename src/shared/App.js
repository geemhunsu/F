import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/ConfigureStore';

import { LoginPage, MainPage } from '../pages';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LoginPage} />
        <Route path='/main' exact component={MainPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
