import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './container/login';
import Register from './container/register';
import AuthRoute from './component/authroute/authroute';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <AuthRoute />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
