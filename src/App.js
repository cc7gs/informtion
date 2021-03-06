import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Login,Register,BossInfo,CowInfo,DashBoard} from './container';
import {AuthRoute} from './component';
import './config'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <AuthRoute />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/bossinfo" component={BossInfo} />
            <Route path="/cowinfo" component={CowInfo} />
            <Route component={DashBoard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
