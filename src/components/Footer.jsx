import React from 'react';
import logo from "../img/logo.png"
import Li from "./Li";
import FooterItem from "./FooterItem";
import SocialLogo from "./SocialLogo";
import SocialMedia from "./SocialMedia";
import FooterSection from "./FooterSection";

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-info">
                    <div>
                        <img className="footer-logo" src={logo} alt="logo" />
                    </div>
                    <p className="footer-desc">Plan and book your perfect trip with
                        expert advice, travel tips destination
                        information from us</p>
                    <p className="footer-copyright">©2020 Thousand Sunny. All rights reserved</p>
                </div>
                <div className="footer-columns">
                    <FooterSection title='Destinations' />
                    <FooterSection title='Shop' />
                    <FooterSection title='Interests' />
                </div>

            </div>
            <SocialMedia />
        </footer>
    );
};

export default Footer;