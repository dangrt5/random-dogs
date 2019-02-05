import React from "react";
import "../assets/css/Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header row">
                <div className="col-4">
                    <div className="logo"></div>
                </div>
                <div className="col-4">
                    <h1 className="title text-center">Random Dog Facts</h1>
                </div>
                <div className="col-4">
                    <div className="logo"></div>
                </div>
            </div>
        )
    }
}