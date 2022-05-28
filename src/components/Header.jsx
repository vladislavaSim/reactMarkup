import React from 'react';
import logo from '../img/logo.png'
import Button from "./Button";
import Li from "./Li";

const Header = () => {
    return (
        <header>
            <div id="shadow"></div>
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <div className="menu-burger-btn">
                            <span></span>
                        </div>
                    </li>
                    <Li innerText='Home' />
                    <Li innerText='Destinations' />
                    <Li innerText='About' />
                    <Li innerText='Partner' />
                    <li className="nav-item hide">
                        <div className="account">
                           <Button buttonText='Log in' className='login' />
                           <Button buttonText='Register' />
                        </div>
                    </li>
                </ul>
                <div className="header-right">
                    <div className="account">
                        <Button buttonText='Log in' className='login' />
                        <Button buttonText='Register' className='heading-box-button'/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;