import React from 'react';
import SocialLogo from "./SocialLogo";
import twitter from '../img/twitter.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
import youtube from '../img/youtube.svg'

const SocialMedia = () => {
    return (
        <div className="footer-social-media">
            <SocialLogo img={twitter}/>
            <SocialLogo img={facebook}/>
            <SocialLogo img={instagram}/>
            <SocialLogo img={linkedin}/>
            <SocialLogo img={youtube}/>
        </div>
    );
};

export default SocialMedia;