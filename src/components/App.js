import React, { Component } from 'react';
import DogFacts from './dogFacts'; 

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Header</h1>
        <DogFacts/>
        <h1 className="text-center">Footer</h1>
      </div>
    );
  }
}

export default App;
