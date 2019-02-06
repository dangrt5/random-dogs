import React, { Component } from 'react'; 
import '../assets/css/DogPics.css';
import axios from 'axios';

class DogPics extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogObj: [],
        }

    }
    componentDidMount = async ()=> {
       await axios.get("https://dog.ceo/api/breeds/image/random/4").then( (resp) => {
            const dogImgArray = resp.data.message;
            const dogArray = [];
            dogImgArray.map( (item, index)=> {
                let num = 31;
                let dogName = '';
                dogName += item[30].toUpperCase()
                while(item[num] != '/') {
                    dogName += item[num]; 
                    num++;
                }
                dogArray.push({dog: dogName, img: item});
            })
            this.setState({
                dogObj: dogArray,
            })
       } )
    }

    render() {
        const { dogObj } = this.state
        const individualDog = dogObj.map( (item, index) => {
             return (
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="individualCards">
                            <div className="col-sm-12 text-center cardTitle">{item.dog}</div>
                            <img src={item.img} className="col-sm-12 cardImg"/>
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

export default DogPics; 