import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@progress/kendo-theme-material/dist/all.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CharacterDetails from './components/marvel/characters/CharacterDetails';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/character/:id" component={CharacterDetails} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
