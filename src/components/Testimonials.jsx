import React from 'react';
import man from "../img/photo.png"
import Star from "./Star";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials-inner">
                <h4 className="testimonials-title">
                    Testimonials
                </h4>
                <div className="rating">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className="testimonials-quote">
                    “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis
                    quis purus. Morbi blandit sit amet turpis nec”
                </p>
                <p className="testimonials-name">
                    Edward Newgate
                </p>
                <p className="testimonials-workplace">
                    Founder Circle
                </p>
            </div>
            <div className="testimonials-img">
                <img src={man} alt="portrait of a man" />
            </div>
        </div>
    );
};

export default Testimonials;