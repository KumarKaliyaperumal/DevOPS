import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import WallStreet from './routes/GetStarted';
import Bitcoin from './routes/Bitcoin';
import NewsAPI from './routes/NewsAPI';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={NewsAPI} />
        <Route exact path='/GetStarted' component={WallStreet} />
        <Route exact path='/bitcoin' component={Bitcoin} />
      </Switch>
    );
  }
}

export default App;
