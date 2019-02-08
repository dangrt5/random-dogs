import React, { Component } from 'react';
import '../assets/css/DogPics.css';

class DogPics extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.retrieveDogPhotos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) this.render();
    }

    render() {
        const { dogObj } = this.props;
        
        const individualDog = dogObj.map((item, index) => {
            return (
                <div className="col-sm-6 col-lg-3">
                    <div className="individualCards">
                        <div className="col-sm-12 text-center cardTitle">{item.dog}</div>
                        <img src={item.img} alt={`Dog ${item.dog}`} className="col-sm-12 cardImg"/>
                    </div>
                </div>
            )
        });
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