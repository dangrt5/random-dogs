import React, { Component } from 'react';
import DogFacts from './dogFacts'; 
import Header from "./Header";
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <DogFacts/>
        <Footer />
      </div>
    );
  }
}

export default App;
