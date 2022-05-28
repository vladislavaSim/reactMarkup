import React from 'react';
import thousand from "../img/Thousand-012.png"
import SectionText from "./SectionText";

const Section2 = () => {
    return (
        <div className="section2">
            <div className="section2-img">
                <img src={thousand} alt="picture" width="659px" height="534px" />
            </div>
            <div className="section2-inner">
                <h4 className="section2-inner-title">
                    A new way to explore the world
                </h4>
                    <SectionText className='section2-inner-text' innerText=' For decades travellers have reached for Lonely Planet books when looking to plan and execute their
                    perfect
                    trip, but now, they can also let Lonely Planet Experiences lead the way' />
                <a href="#" className="section2-inner-button">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Section2;