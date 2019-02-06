import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1 className="text-center">Body</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
