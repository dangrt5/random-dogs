import React from "react";
import "../assets/css/Footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer row">
                <form>
                    <p>Select # of facts (1-4)</p>
                    <div className="form-group">
                        <input type="text" placeholder="0" />
                    </div>
                    <button className='btn btn-lg btn-primary'>Generate</button>
                </form>
            </div>
        )
    }
}