import React from 'react';
import thousand from "../img/thousand-011.png"
import Button from "./Button";
import SectionText from "./SectionText";

const Heading = () => {
    return (
        <div className="heading">
            <div className="heading-box">
                <h4 className="heading-box-title">
                    Explore and Travel
                </h4>
                <SectionText className='heading-box-text' innerText='Holiday Finder'/>
               <Button buttonText='Explore' className='heading-box-button'/>
            </div>
            <div className="heading-img-box">
                <img src={thousand} alt="picture" width="687px" height="654px" />
            </div>
        </div>
    );
};

export default Heading;