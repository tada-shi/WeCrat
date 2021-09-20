import React from 'react';
import { HiOutlineLocationMarker  } from 'react-icons/hi';
import {BiPhoneCall} from 'react-icons/bi';
import {SiMailDotRu}from 'react-icons/si';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="links">
                <div className="team">
                    <p className="headline">Team</p>
                    <ul>
                        <li>Our Story</li>
                        <li>Journey of Our Creator</li>
                    </ul>
                </div>
                <div className="quick-links">
                    <p className="headline">Quick Links</p>
                    <ul>
                        <li>Shop</li>
                        <li>Join US</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                    </ul>
                </div>
                <div className="contact-info">
                    <p className="headline">Contact Info</p>
                    <div className="medial">
                        <p className="location"><HiOutlineLocationMarker/></p>
                        <p className="phone"><BiPhoneCall/></p>
                        <p className="mail"><SiMailDotRu/></p>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <p>copyrights&#169;2021WeCrat</p>
            </div>
        </footer>
    )
}

export default Footer
