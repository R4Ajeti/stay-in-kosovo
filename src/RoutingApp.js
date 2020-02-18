import React from 'react';
import ClientModel from './sik/ClientModel';
import EntityModel from './sik/EntityModel';
import HomePage from './containers/Mybuss-KS-Clone';

import LandingPage from './sik/landing.page';
import Index from './containers/App';
import { AppLayout } from './sik/app.layout';
import { ProtectedRoute } from './sik//protected.route';

import './RoutingApp.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/Client" component={ClientModel} />
          <Route exact path="/Entity" component={EntityModel} />
          <Route exact path="/LP" component={LandingPage} />
          <Route exact path="/search" name="search" component={Index} />
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
