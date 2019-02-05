import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1 className="text-center">Body</h1>
        <h1 className="text-center">Footer</h1>
      </div>
    );
  }
}

export default App;
