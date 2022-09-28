import React from 'react';
import './Header.css';
import logo from '../../logo.png'

const Header = () => {
    return (
        <header>
            <div className="main-header">
                <img src={logo} width='200px' alt="" />
                <h1 className="logo-tag-line">
                    Zym Club
                </h1>
            </div>
        </header>
    );
};

export default Header;