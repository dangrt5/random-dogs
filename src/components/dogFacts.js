import React, { Component } from 'react'; 
import '../assets/dogFacts.css';
import axios from 'axios';

class DogFacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogObj: [],
        }

    }
    componentDidMount = async ()=> {
       await axios.get("https://dog.ceo/api/breeds/image/random/4").then( (resp) => {
            console.log(resp.data.message);
            const dogImgArray = resp.data.message;
            const dogArray = [];
            dogImgArray.map( (item, index)=> {
                let num = 30;
                let dogName = '';
                while(item[num] != '/') {
                    dogName += item[num]; 
                    num++;
                }
                dogArray.push({dog: dogName, img: item});
            })
            console.log(dogArray);
            this.setState({
                dogObj: dogArray,
            })
       } )
    }

    render() {
        console.log('render', this.state.dogObj)
        const individualDog = this.state.dogObj.map( (item, index) => {
             return (
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="individualCards">
                            <div className="col-sm-12 text-center cardTitle">{item.dog}</div>
                            <img src={item.img} className="col-sm-12 cardImg"/>
                            <div className="col-sm-12 text-center cardFact">Facts Facts Facts</div>
                        </div>
                    </div>
                )
        })
        return (
            <div className="container">   
                <div className="row">
                   {individualDog}
                </div>
            </div>
        )
    }
}

export default DogFacts; 