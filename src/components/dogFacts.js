import React, { Component } from 'react';
import '../assets/css/DogFacts.css';
import axios from 'axios';


class DogFacts extends Component {

    componentDidMount = async() => {
        await axios.get("http://dog-api.kinduff.com/api/facts", {crossDomain: false}).then( (resp) => {
            console.log("What is the Dog Facts", resp);
            
        })
    }


    render() {
        return (
                <div className="randomText text-center">
                    Random Fact: 
                </div>
        )
    }
}

export default DogFacts;