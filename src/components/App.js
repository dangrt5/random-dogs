import React, { Component } from 'react';
import DogPics from './DogPics'; 
import Header from "./Header";
import Footer from "./Footer";
import DogFacts from './DogFacts';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <DogFacts/>
        <DogPics/>
        <Footer />
      </div>
    );
  }
}

export default App;
