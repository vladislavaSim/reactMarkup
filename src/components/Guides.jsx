import React from 'react';
import thousand from "../img/Thousand-03.png"
import SectionText from "./SectionText";

const Guides = () => {
    return (
        <div className="guides">
            <div className="guides-inner">
                <h4 className="guides-title section2-inner-title">
                    Guides by Thousand <br />
                    Sunny
                </h4>
                <SectionText
                    className='guides-text section2-inner-text'
                    innerText=' Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is
                    the ultimate resource before and during a trip.' />
                <a href="#" className="guides-button section2-inner-button">Download</a>
            </div>
            <div className="guides-img">
                <img src={thousand} alt="picture" />
            </div>
        </div>
    );
};

export default Guides;