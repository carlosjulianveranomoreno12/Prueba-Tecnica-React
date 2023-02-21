import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Details';
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/buscador-peliculas/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
