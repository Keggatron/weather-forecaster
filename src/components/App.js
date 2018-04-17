import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Forecast from './Forecast';
import Details from './Details'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header /> 
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/forecast' component={Forecast} />
            <Route exact path='/details' component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
