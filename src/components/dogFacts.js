import React, { Component } from 'react'; 
import '../assets/dogFacts.css';
import shibaInu from '../assets/images/shibainu.jpg';
import goldie from '../assets/images/goldie.jpg';
import axios from 'axios';

class DogFacts extends Component {

    componentDidMount = async ()=> {
       await axios.get("https://dog.ceo/api/breeds/image/random/4").then( (resp) => {
            console.log(resp);
       } )
    }

    render() {
        const imgStyle = {
            backgroundImage: `url(${shibaInu})`,
        }
        const imgStyle1 = {
            backgroundImage: `url(${goldie})`,
        }
        return (
            <div className="container">   
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className=" individualCards">
                            <div className="col-sm-12 text-center cardTitle">Shiba Inu</div>
                            <img src={shibaInu} className="col-sm-12 cardImg"/>
                            <div className="col-sm-12 text-center cardFact">Facts Facts Facts</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className=" individualCards">
                            <div className="col-sm-12 text-center cardTitle">Shiba Inu</div>
                            <img src={goldie} className="col-sm-12 cardImg"/>
                            <div className="col-sm-12 text-center cardFact">Facts Facts Facts</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className=" individualCards">
                            <div className="col-sm-12 text-center cardTitle">Shiba Inu</div>
                            <img src={shibaInu} className="col-sm-12 cardImg"/>
                            <div className="col-sm-12 text-center cardFact">Facts Facts Facts</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className=" individualCards">
                            <div className="col-sm-12 text-center cardTitle">Shiba Inu</div>
                            <img src={goldie} className="col-sm-12 cardImg"/>
                            <div className="col-sm-12 text-center cardFact">Facts Facts Facts</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DogFacts; 