import React from 'react';
import ReadMoreLink from "./ReadMoreLink";

const TrendingCard = ({cardTitle, cardText, cardImg}) => {
    const classes = `trending-img ${cardImg}`
    return (
        <div className="trending-item">
            <div className={classes}/>
            <h4 className="trending-title">
                {cardTitle}
            </h4>
            <p className="trending-text">
                {cardText}
            </p>
            <ReadMoreLink />
        </div>
    );
};

export default TrendingCard;