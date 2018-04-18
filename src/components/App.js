import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Forecast from './Forecast';
import Details from './Details';
import Index from './Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header /> 
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details' component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
