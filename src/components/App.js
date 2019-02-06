import React, { Component } from 'react';
import DogPics from './DogPics';
import Header from "./Header";
import Footer from "./Footer";
import DogFacts from './dogFacts';
import axios from "axios";


class App extends Component {

  state = {
    dogObj: []
  }

  retrieveDogPhotos = async () => {
    await axios.get("https://dog.ceo/api/breeds/image/random/4").then((resp) => {
      const dogImgArray = resp.data.message;
      const dogArray = [];
      dogImgArray.map((item, index) => {
        const dogName = item.match(/.+\/breeds\/(.+)\//)[1];
        dogArray.push({ dog: dogName, img: item });
        this.setState({
          dogObj: dogArray,
        })
      })
    })
  }

  render() {
    return (
      <div className="container" >
        <Header />
        <DogFacts />
        <DogPics dogObj={this.state.dogObj} retrieveDogPhotos={this.retrieveDogPhotos} />
        <Footer dogObj={this.state.dogObj} retrieveDogPhotos={this.retrieveDogPhotos} />
      </div>
    );
  }
}

export default App;
