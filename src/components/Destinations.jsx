import React from 'react';
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"

const Destinations = () => {
    return (
        <div className="destinations">
            <div className="destinations-head">
                <h4 className="destinations-title">Featured destinations</h4>
                <a href="#" className="destinations-more">View all ></a>
            </div>
            <div className="destinations-inner">
                <div className="destinations-item">
                    <img src={img1} alt="picture of nature" />
                        <div className="destinations-desc">
                            <p className="destinations-desc-place">
                                Raja Ampat
                            </p>
                            <p className="destinations-desc-country">
                                Indonesia
                            </p>
                        </div>
                </div>
                <div className="destinations-item">
                    <img src={img2} alt="picture of nature" />
                        <div className="destinations-desc">
                            <p className="destinations-desc-place">
                                Fanjingshan
                            </p>
                            <p className="destinations-desc-country">
                                China
                            </p>
                        </div>
                </div>
                <div className="destinations-item">
                    <img src={img3} alt="picture of nature" />
                        <div className="destinations-desc">
                            <p className="destinations-desc-place">
                                Vevey
                            </p>
                            <p className="destinations-desc-country">
                                Switzerland
                            </p>
                        </div>
                </div>
                <div className="destinations-item">
                    <img src={img4} alt="picture of nature" />
                        <div className="destinations-desc">
                            <p className="destinations-desc-place">
                                Skadar
                            </p>
                            <p className="destinations-desc-country">
                                Montenegro
                            </p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;