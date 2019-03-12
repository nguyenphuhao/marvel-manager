import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavbarView from './views/layout/NavbarView';
import CharacterDetailsView from './views/marvel/characters/CharacterDetailsView';
import DashboardView from './views/dashboard/DashboardView';
import CharacterGridView from './views/marvel/characters/CharacterGridView';
class App extends Component {

  render() {
    return (
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
        <div className="App">
          <NavbarView />
          <Switch>
            <Route exact path="/" component={DashboardView} />
            <Route path="/character" component={CharacterGridView} />
            <Route path="/character/:id" component={CharacterDetailsView} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
