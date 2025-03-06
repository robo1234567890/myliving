import React from 'react';
import './Homepage.css'; // Ensure you have the CSS file in the same directory

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">MyLiving</div>
                    <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/properties">Properties</a></li>
                            <li><a href="/communities">Communities</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    <a href="/login" className="btn">Login / Sign Up</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;