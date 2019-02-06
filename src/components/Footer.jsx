import React from "react";
import "../assets/css/Footer.css";

export default class Footer extends React.Component {

    render() {



        return (
            <div className="footer row">

                <div className="col-12">
                    <p>Generate new...</p>
                    <div className="buttons">
                        <button onClick={this.props.retrieveDogPhotos} className="btn btn-lg btn-primary">Images</button>
                        <button className='btn btn-lg btn-primary'>Random Fact</button>
                    </div>

                </div>

            </div>
        )
    }
}