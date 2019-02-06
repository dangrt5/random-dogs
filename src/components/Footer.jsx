import React from "react";
import "../assets/css/Footer.css";

export default class Footer extends React.Component {

    state = {
        input: '',
    }


    handleInput = e => {
        const { value } = e.currentTarget.value;
        this.setState({ input: value })
    }


    render() {
        const { input } = this.state;

        return (
            <div className="footer row">
                <form>
                    <p>Select # of facts (1-4)</p>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" value={input} />
                    </div>
                    <button className='btn btn-lg btn-primary'>Generate</button>
                </form>
            </div>
        )
    }
}