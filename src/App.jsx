import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home.component';

class App extends Component {
  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>  
        </BrowserRouter>
      </div>
    );
  }
}

export default App;