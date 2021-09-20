import React from 'react';
import './Navbar.css';
import jpg from '../website-logo.svg'
import {BsSearch, BsBag, BsPerson} from 'react-icons/bs'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={jpg} alt="" />
            </div>
            <div className="list">
                <ul>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="space"></div>
            <div className="icons">
                <p><BsSearch/></p>
                <p><BsPerson/></p>
                <p><BsBag/></p>
            </div>
        </nav>
    )
}
