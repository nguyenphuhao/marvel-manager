import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@progress/kendo-theme-material/dist/all.css';
import NavbarView from './views/layout/NavbarView';
import CharacterDetails from './components/marvel/characters/CharacterDetails';
import DashboardView from './views/dashboard/DashboardView';
import CharacterGridView from './views/marvel/characters/CharacterGridView';
class App extends Component {

  render() {
    const uri = "";
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarView />
          <Switch>
            <Route exact path="/" component={DashboardView} />
            <Route path={uri + "/character"} component={CharacterGridView} />
            <Route path={uri + "/character/:id"} component={CharacterDetails} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
