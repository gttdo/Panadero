import React, {Component} from 'react';

import Logo from "../../assets/images/bread.svg";

class Navigation extends Component {
    render(){
        return(
            <header className="header">
                <div className="header--logo">
                    <img className="header--logo-image" alt="logo" src={Logo}/>
                </div>
                <ul className="header--nav">
                    <li className="header--nav-item"><a className="header--link" href="#story">About Us</a></li>
                    <li className="header--nav-item"><a className="header--link" href="#products">Products</a></li>
                    <li className="header--nav-item"><a className="header--link" href="#contact">Contact Us</a></li>
                </ul>
            </header>
        );
    }
}

export default Navigation;