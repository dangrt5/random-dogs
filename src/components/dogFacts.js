import React, { Component } from 'react';
import '../assets/css/DogFacts.css';
import axios from 'axios';


class DogFacts extends Component {
constructor(props) {
    super(props);
    this.state = {
        fact: 'Former Pharmacy Technician at CVS Pharmacy, Worked at Snow Monster. Worked at Snow Monster. Worked at Snow Monster',
    }
}
    componentDidMount = async() => {
        // await axios.get("http://dog-api.kinduff.com/api/facts", {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then( (resp) => {
        //     console.log("What is the Dog Facts", resp);
        // })
    }


    render() {
    const { fact } = this.state
        return (
            // <div className="randomContainer">
            //     <div className="randomText">
            //         <span className="boldRF">Random Fact:</span> {fact}
            //     </div>
            // </div>
            <div className="randomContainer container">
                <div className="row">
                    <div className="col-sm-12 boldRF">Random Fact:</div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">{fact}</div>
                </div>
            </div>
        )
    }
}

export default DogFacts;