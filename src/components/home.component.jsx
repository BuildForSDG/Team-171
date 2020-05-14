import React, { Component } from 'react';
import store from '../configureStore';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    store().dispatch({ type: 'INCREMENT' });
    store().dispatch({ type: 'DECREMENT' });
    store().dispatch({ type: 'DECREMENT' });
    store().dispatch({ type: 'DECREMENT' });
    return (
      <div className="home">
        <h1>homepage</h1>
        <h3>12</h3>
      </div>
    );
  }
}

export default Home;
