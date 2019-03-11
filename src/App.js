import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@progress/kendo-theme-material/dist/all.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CharacterDetails from './components/marvel/characters/CharacterDetails';
import CharacterList from './components/marvel/characters/CharacterList';
class App extends Component {

  render() {
    const uri = "";
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={uri + "/"} component={Dashboard} />
            <Route path={uri + "/character"} component={CharacterList} />
            <Route path={uri + "/character/:id"} component={CharacterDetails} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
