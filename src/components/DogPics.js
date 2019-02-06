import React, { Component } from 'react';
import '../assets/css/DogPics.css';

class DogPics extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     dogObj: [],
        // }

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
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="individualCards">
                        <div className="col-sm-12 text-center cardTitle">{item.dog}</div>
                        <img alt={index} src={item.img} className="col-sm-12 cardImg" />
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